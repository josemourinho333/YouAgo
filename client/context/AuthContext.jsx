import React, { useContext, useState, useEffect, useRef } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
};

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [journalEntry, setJournalEntry] = useState({
    date: new Date(),
    diary: '',
    mood: '',
    grateful: ['', '', ''],
  });
  const [journalEntries, setJournalEntries] = useState(null);

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

  //Journaling State + Functions
  //handle diary input
  const handleDiary = (e) => {
    setJournalEntry((prev) => ({
      ...prev,
      diary: e.target.value,
    }));
  };

  //handle grateful input
  const handleGrateful = (e, index) => {
    const updatedGrateful = [...journalEntry.grateful];
    updatedGrateful[index] = e.target.value;

    setJournalEntry((prev) => ({
      ...prev,
      grateful: [...updatedGrateful],
    }));
  };

  // handle moood
  const handleMood = () => {

  };

  //handle journal submission
  const finishJournal = () => {
    console.log('journaling finished');
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
    journalEntry,
    journalEntries
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}