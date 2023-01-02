import React from 'react';
import Layout from '../../components/Dashboard/layout';

const Entries = () => {
  return (
    <div>entries</div>
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