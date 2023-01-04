import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const MoodItems = ({name, setSelected, setOpeningModal}) => {
  const { handleMood } = useAuth();

  useEffect(() => {
    const emotionBox = document.querySelectorAll('.emotion-box');

    const handleFinalSelection = () => {
      handleMood(name);
      setOpeningModal('');
      setSelected(null);
    };

    for (let i = 0; i < emotionBox.length; i++) {
      emotionBox[i].addEventListener('click', handleFinalSelection);
    };

    return () => {
      for (let i = 0; i < emotionBox.length; i++) {
        emotionBox[i].removeEventListener('click', handleFinalSelection);
      };
    };
  }, []);

  return (
    <div className="uppercase text-md font-medium bg-base-300 rounded-lg p-2 w-[150px] h-[150px] flex justify-center items-center hover:bg-neutral emotion-box" onClick={() => handleMood(name)}>
      {name}
    </div>
  )
}

export default MoodItems;