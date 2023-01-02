import React from 'react';
import Layout from '../../components/Dashboard/layout';

const Write = () => {
  return (
    <div>Write</div>
  )
}

export default Write;

Write.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}