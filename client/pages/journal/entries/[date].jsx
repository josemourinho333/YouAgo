import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Layout from '../../../components/Dashboard/layout';
import { useAuth } from '../../../context/AuthContext';

const Entry = () => {
  const router = useRouter();
  const { date } = router.query;
  const { currentUser, journalEntries } = useAuth();
  const [focusEntry, setFocusEntry] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }

    const currentFocus = journalEntries.filter((entry) => {
      console.log('er', entry.date === date);
      return entry.date === date;
    });

    setFocusEntry(currentFocus[0]);

  }, [date, currentUser, journalEntries]);

  return (
    <div>Entry: {date} | {focusEntry.diary}</div>
  )
}

export default Entry;

Entry.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}