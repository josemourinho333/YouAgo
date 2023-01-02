import React from 'react';
import Dashboard from '../components/Dashboard';
import Layout from '../components/Dashboard/layout';

const journal = () => {
  return (
    <Dashboard />
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