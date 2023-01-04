import React from 'react';
import MoodModal from './MoodModal';

const Mood = () => {
  return (
    <>
      <div className="flex-1 flex flex-col min-h-[50vh] items-center justify-center">
        <label htmlFor="set-mood" className="btn bg-neutral border-none w-full h-full text-neutral-content font-semibold text-3xl lg:text-5xl normal-case hover:bg-neutral-content hover:text-neutral">How are you feeling today?<br/>+</label>
      </div>
      <MoodModal />
    </>
  )
}

export default Mood;