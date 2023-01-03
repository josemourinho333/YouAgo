import Router from 'next/router';
import React, { useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import Layout from '../components/Dashboard/layout';
import { useAuth } from '../context/AuthContext';

const Journal = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }
  }, [])

  return (
    <Dashboard/>
  )
}

export default Journal;

Journal.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}