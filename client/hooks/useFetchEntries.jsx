// import React, { useState, useEffect, useRef } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { useAuth } from '../context/AuthContext';
// import { db } from '../firebase';


// const useFetchEntries = () => {
//   const [fetchLoading, setFetchLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [entries, setEntries] = useState(null);

//   const { currentUser } = useAuth();

//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const docRef = doc(db, 'users', currentUser.uid);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           console.log(docSnap.data());
//         }
//       } catch (err) {
//         setError('Failed to load entries');
//       } finally {
//         setFetchLoading(false);
//       }
//     }

//     fetchEntries();
//   }, []);

//   return {
//     fetchLoading, error, entries
//   }
// }

// export default useFetchEntries;