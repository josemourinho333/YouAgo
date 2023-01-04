import React from 'react';
import { useAuth } from '../../context/AuthContext';

const MoodItems = ({name}) => {
  const { handleMood } = useAuth();

  return (
    <div className="uppercase text-md font-medium bg-base-300 rounded-lg p-2 w-[150px] h-[150px] flex justify-center items-center hover:bg-neutral" onClick={() => handleMood(name)}>
      {name}
    </div>
  )
}

export default MoodItems;