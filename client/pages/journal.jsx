import React from 'react';
import Dashboard from '../components/Dashboard';
import Layout from '../components/Dashboard/layout';
import { useAuth } from '../context/AuthContext';

const journal = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div>Must be logged in</div> 
    )
  }

  return (
    <Dashboard/>
  )
}

export default journal;

journal.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}