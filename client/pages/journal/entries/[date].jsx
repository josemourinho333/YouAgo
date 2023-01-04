import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Layout from '../../../components/Dashboard/layout';
import { useAuth } from '../../../context/AuthContext';
import moment from 'moment';

const Entry = () => {
  const router = useRouter();
  const { date } = router.query;
  const { currentUser, journalEntries } = useAuth();
  const [focusEntry, setFocusEntry] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      Router.push('/login');
    }

    const currentFocus = journalEntries.filter((entry) => {
      return entry.date === date;
    });

    setFocusEntry(currentFocus[0]);

  }, [date, currentUser, journalEntries]);

  const mappedGrateful = focusEntry?.grateful?.map((grate, index) => {
    return (
      <div key={index} className="text-neutral-content w-full max-w-full font-light text-xl lg:text-2xl">
        {grate}
      </div>
    )
  })

  return (
    <div className="h-full flex flex-col items-start p-5 gap-y-5">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-neutral font-bold text-4xl lg:text-6xl">{moment(focusEntry?.date).format('ll')}</h1>
      </div>
      <div className="flex flex-col h-full w-full gap-5 lg:flex-row">
        <div className="p-2 font-light basis-8/12 min-h-full text-neutral-content text-xl lg:text-2xl">{focusEntry?.diary}</div>
        <div className="flex flex-col basis-4/12 p-2 gap-y-5">
          <div className="flex-1 flex flex-col min-h-[50vh] items-center justify-center">
            <div className="rounded-lg bg-neutral border-none w-full h-full text-neutral-content font-semibold text-3xl lg:text-5xl normal-case text-center flex justify-center items-center">
              You felt<br/>
              {focusEntry?.mood}
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="label-text text-xl lg:text-2xl font-light text-neutral">I&rsquo;m grateful for...</div>
            {mappedGrateful}
          </div>
        </div>  
      </div>
    </div>
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