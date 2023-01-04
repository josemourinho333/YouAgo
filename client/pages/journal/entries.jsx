import Router from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Dashboard/layout';
import { useAuth } from '../../context/AuthContext';
import EntriesIndex from '../../components/Entries';

const Entries = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }
  }, []);
  
  return (
    <EntriesIndex />
  )
}

export default Entries;

Entries.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}