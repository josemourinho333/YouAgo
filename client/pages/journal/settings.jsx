import Router from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Dashboard/layout';
import { useAuth } from '../../context/AuthContext';
import Head from 'next/head';

const Settings = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }
  }, []);

  return (
    <div>Settings</div>
  )
}

export default Settings;

Settings.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>You&rsquo;reAgo - Settings</title>
      </Head>
      {page}
    </Layout>
  )
}