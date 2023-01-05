import Router from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Dashboard/layout';
import WriteIndex from '../../components/Write';
import { useAuth } from '../../context/AuthContext';
import Head from 'next/head';

const Write = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }
  }, []);

  return (
    <WriteIndex/>
  )
}

export default Write;

Write.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>You&rsquo;reAgo - Write</title>
      </Head>
      {page}
    </Layout>
  )
}