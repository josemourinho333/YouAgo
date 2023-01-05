import { useEffect } from 'react';
import Head from 'next/head';
import Homepage from '../components/Homepage';
import { useAuth } from '../context/AuthContext';
import Router from 'next/router';


export default function Home() {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      Router.push('/journal');
    }
  }, []);

  return (
    <>
      <Head>
        <title>You&rsquo;reAgo</title>
        <meta name="description" content="Write to your highest self in the future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage/>
      </main>
    </>
  )
}
