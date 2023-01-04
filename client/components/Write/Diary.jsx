import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Diary = () => {
  const { handleDiary, journalEntry} = useAuth();

  return (
    <textarea className="textarea textarea-ghost p-2 font-light resize-none basis-8/12 min-h-full text-neutral-content text-xl lg:text-2xl placeholder:text-xl placeholder:lg:text-2xl placeholder:text-neutral focus:outline-none" placeholder="To you, in 365 days" value={journalEntry.diary} onChange={(e) => handleDiary(e)}></textarea>
  )
}

export default Diary;