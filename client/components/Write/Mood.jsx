import React, {useEffect, useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import MoodModal from './MoodModal';

const Mood = () => {
  const [openingModal, setOpeningModal] = useState('');
  const { journalEntry } = useAuth();

  useEffect(() => {
    const openBtn = document.getElementById('open-mood');

    const openMdl = () => {
      if (!openingModal) {
        setOpeningModal('modal-open');
      } else {
        return
      }
    };

    openBtn.addEventListener('click', openMdl);

    return () => {
      openBtn.removeEventListener('click', openMdl);
    };

  }, []);

  return (
    <>
      <div className="flex-1 flex flex-col min-h-[50vh] items-center justify-center">
        { !journalEntry.mood
          ? <label id="open-mood" className="btn bg-neutral border-none w-full h-full text-neutral-content font-semibold text-3xl lg:text-5xl normal-case hover:bg-neutral-content hover:text-neutral">
              How are you feeling today?<br/>+
            </label>
          : <label id="open-mood" className="btn bg-neutral border-none w-full h-full text-neutral-content font-semibold text-3xl lg:text-5xl normal-case hover:bg-neutral-content hover:text-neutral">
              I&rsquo;m feeling...<br/>{journalEntry.mood}
            </label>
        }
        
      </div>
      <MoodModal openingModal={openingModal} setOpeningModal={setOpeningModal}/>
    </>
  )
}

export default Mood;