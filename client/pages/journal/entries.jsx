import Router from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Dashboard/layout';
import { useAuth } from '../../context/AuthContext';

const Entries = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }

    if (currentUser) {
      Router.push('/journal');
    }
  }, []);
  
  return (
    <div>Not supposed to be here!</div>
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