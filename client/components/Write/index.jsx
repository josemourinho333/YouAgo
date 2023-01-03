import React, { useState } from 'react';
import moment from 'moment';
import Diary from './Diary';
import Grateful from './Grateful';

const WriteIndex = () => {
  const [journalEntry, setJournalEntry] = useState({
    date: new Date(),
    diary: '',
    mood: '',
    grateful: ['One', 'Two', 'Three'],
  });

  //handle diary input
  const handleDiary = (e) => {
    setJournalEntry((prev) => ({
      ...prev,
      diary: e.target.value,
    }));
  };

  //handle grateful input
  const handleGrateful = (e, index) => {
    const updatedGrateful = [...journalEntry.grateful];
    updatedGrateful[index] = e.target.value;

    setJournalEntry((prev) => ({
      ...prev,
      grateful: [...updatedGrateful],
    }));
  };

  return (
    <div className="h-full flex flex-col items-start p-5 gap-y-5">
      <h1 className="text-neutral font-bold text-4xl lg:text-6xl">{moment().format('ll')}</h1>
      <div className="flex flex-col h-full w-full gap-5 lg:flex-row">
        <Diary journalEntry={journalEntry} handleDiary={handleDiary}/>
        <div className="flex flex-col border border-neutral basis-4/12 p-2">
          <Grateful journalEntry={journalEntry} handleGrateful={handleGrateful}/>
        </div>  
      </div>

    </div>
  )
}

export default WriteIndex;