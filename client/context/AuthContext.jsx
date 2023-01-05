import React, { useContext, useState, useEffect, useRef } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc, deleteField, updateDoc, FieldValue } from 'firebase/firestore';
import { useRouter } from 'next/router';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
};

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [journalEntry, setJournalEntry] = useState({
    date: '',
    diary: '',
    mood: '',
    grateful: ['', '', ''],
  });
  const [journalEntries, setJournalEntries] = useState([]);
  const [emotion, setEmotion] = useState('');
  const [emotions, setEmotions] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState('');

  const router = useRouter();
  const userInfo = useRef();

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // fetching entries data
  useEffect(() => {
    const fetchEntries = async () => {
      if (currentUser) {
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const allEntries = docSnap.data().entries;
            const data = Object.keys(allEntries).map((entry) => {
              return allEntries[entry];
            })
            setJournalEntries([...data]);
          }
        } catch (err) {
          setError('Failed to load entries');
        } finally {
          setFetchLoading(false);
        }
      }
    }
    fetchEntries();
  }, [currentUser]);

  //fetching emotions data
  useEffect(() => {
    const fetchEmotions = async () => {
      if (currentUser) {
        try {
          const docRef = doc(db, 'emotions', "master");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const allEmotions = docSnap.data();
            const formattedEmotions = Object.keys(allEmotions).map((emotion) => {
              const emotionObj = {
                [emotion]: allEmotions[emotion],
              };
              return emotionObj;
            });
            setEmotions([...formattedEmotions]);
          }
        } catch (err) {
          setError('Failed to fetch emotions. Try again');
        }
      }
    }

    fetchEmotions();
  }, [currentUser])

  //Journaling State + Functions
  //handle diary input
  const handleDiary = (e) => {
    setJournalEntry((prev) => ({
      ...prev,
      date: new Date().toISOString(),
      diary: e.target.value,
    }));
  };

  //handle grateful input
  const handleGrateful = (e, index) => {
    const updatedGrateful = [...journalEntry.grateful];
    updatedGrateful[index] = e.target.value;

    setJournalEntry((prev) => ({
      ...prev,
      date: new Date().toISOString(),
      grateful: [...updatedGrateful],
    }));
  };

  // handle moood
  const handleMood = (mood) => {
    setJournalEntry((prev) => ({
      ...prev,
      mood
    }))
  };

  //handle journal submission
  const finishJournal = async () => {
    const updatedEntries = [journalEntry, ...journalEntries];
    setJournalEntries([...updatedEntries]);
    const userRef = doc(db, 'users', currentUser.uid);
    const entryKey = new Date(journalEntry.date).valueOf();
    await setDoc(userRef, {
      'entries': {
        [entryKey.toString()]: journalEntry
      }
    }, {merge: true});
    setJournalEntry({
      date: '',
      diary: '',
      grateful: ["", "", ""],
      mood: ''
    });
    router.push('/journal');
    setShowSuccess('Submission success.');
  };

  //handle journal delete
  const deleteJournalEntry = async (entryKey) => {
    const updatedEntries = journalEntries.filter((entry) => entry.date !== entryKey);
    setJournalEntries([...updatedEntries]);
    const userRef = doc(db, 'users', currentUser.uid);
    const key = new Date(entryKey).valueOf();
    await updateDoc(userRef, {
      [`entries.${key.toString()}`]: deleteField()
    });
    router.push('/journal');
    setShowSuccess('Deleted successfully');
  };

  //handle when alert close button is clicked
  const closeAlert = () => {
    setShowSuccess(false);
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    googleLogin,
    userInfo,

    handleDiary,
    handleGrateful,
    handleMood,
    finishJournal,
    deleteJournalEntry,
    journalEntry,
    journalEntries,

    emotion,
    emotions,

    showSuccess,
    closeAlert,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}