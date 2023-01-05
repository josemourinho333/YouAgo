import React, { useEffect } from 'react';
import moment from 'moment';
import Diary from './Diary';
import Grateful from './Grateful';
import Mood from './Mood';
import { useAuth } from '../../context/AuthContext';

const WriteIndex = () => {
  const { finishJournal } = useAuth();

  return (
    <div className="h-full flex flex-col items-start p-5 gap-y-5">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-neutral font-bold text-4xl lg:text-6xl">{moment().format('ll')}</h1>
        <button className="btn btn-sm btn-primary sm:btn-md" onClick={finishJournal}>Submit</button>
      </div>
      <div className="flex flex-col h-full w-full gap-5 lg:flex-row">
        <Diary />
        <div className="flex flex-col basis-4/12 p-2">
          <Mood />
          <Grateful />
        </div>  
      </div>
    </div>
  )
}

export default WriteIndex;