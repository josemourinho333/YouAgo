import React from 'react';
import { useAuth } from '../../context/AuthContext';
import MoodCategory from './MoodCategory';

const MoodModal = () => {
  const { emotions, handleMood } = useAuth();

  const emotionsRender = emotions?.map((emotion, index) => {
    return (
      <MoodCategory
        key={index}
        emotionCategory={Object.keys(emotion)[0]}
        emotionItems={emotion[Object.keys(emotion)[0]]}
      />
    )
  });

  return (
    <>
      <input type="checkbox" id="set-mood" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
        <label htmlFor="set-mood" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="flex flex-col gap-y-7">
            <h3 className="font-extrabold text-2xl lg:text-5xl text-neutral">I&rsquo;m feeling...</h3>
            <div className="flex flex-row flex-wrap gap-5 w-full justify-center items-center">
              {emotionsRender}
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="set-mood" className="btn">Select</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoodModal;