import Router from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Dashboard/layout';
import { useAuth } from '../../context/AuthContext';

const Write = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }
  }, [])
  

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