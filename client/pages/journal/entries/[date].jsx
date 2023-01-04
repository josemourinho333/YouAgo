import React, { useEffect } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Layout from '../../../components/Dashboard/layout';
import { useAuth } from '../../../context/AuthContext';

const Entry = () => {
  const router = useRouter();
  const { date } = router.query;
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }
  }, []);

  return (
    <div>Entry: {date}</div>
  )
}

export default Entry;

Entry.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}