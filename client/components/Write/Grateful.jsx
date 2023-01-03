import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../context/AuthContext';

const Grateful = ({journalEntry, handleGrateful}) => {
  const { currentUser } = useAuth();
  // loop over grateful spots and render input elements
  const createGratefulBlocks = journalEntry.grateful.map((item, index) => {
    return (
      <label key={currentUser.uid + index} className="label flex flex-row items-center justify-start">
        <span className="label-text text-xl lg:text-2xl font-light text-neutral">{index + 1}</span>
        <input id={index} type="text" placeholder="..." className="input input-ghost w-full max-w-full font-light placeholder:text-xl placeholder:lg:text-2xl text-xl lg:text-2xl focus:outline-none" value={journalEntry.grateful[index]} onChange={(e) => {
          handleGrateful(e, index);}
        }/>
    </label>
    )
  })

  return (
    <div className="form-control w-full max-w-full">
      <label className="label">
        <span className="label-text text-xl lg:text-2xl font-light text-neutral">3 Things I&rsquo;m Grateful For</span>
      </label>
      {createGratefulBlocks}
    </div>
  )
}

export default Grateful;