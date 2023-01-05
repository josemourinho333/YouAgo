import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import MoodCategory from './MoodCategory';
import MoodItems from './MoodItems';
import { HiOutlineChevronLeft } from 'react-icons/hi';

const MoodModal = ({openingModal, setOpeningModal}) => {
  const [selected, setSelected] = useState(null);
  const { emotions } = useAuth();

  // set state on category clicked
  const handleCategorySelect = (emoCat, emoItems) => {
    setSelected({
      category: emoCat,
      items: emoItems
    });
  };

  // clear our the setSelected state to go back to categories list
  const handleClearCat = () => {
    setSelected('');
  };

  // handle final mood and claer out state to close modal
  useEffect(() => {
    const closeModalBtn = document.getElementById('close-mood-modal');
    const moodModal = document.getElementById('mood-modal');

    const closeModal = () => {
      if (moodModal.classList.contains('modal-open')) {
        moodModal.classList.remove("modal-open");
        setOpeningModal('');
      } else {
        return;
      }
    };

    closeModalBtn.addEventListener('click', closeModal);

    return () => {
      closeModalBtn.removeEventListener('click', closeModal);
    }
  }, [])

  const emotionsRender = emotions?.map((emotion, index) => {
    return (
      <MoodCategory
        key={index}
        emotionCategory={Object.keys(emotion)[0]}
        emotionItems={emotion[Object.keys(emotion)[0]]}
        handleCategorySelect={handleCategorySelect}
      />
    )
  });

  const emotionItemsRender = selected?.items?.map((item, index) => {
    return (
      <MoodItems
        key={index}
        name={item}
        setSelected={setSelected}
        setOpeningModal={setOpeningModal}
      />
    )
  });

  return (
    <>
      <input type="checkbox" id="set-mood" className="modal-toggle" />
      <div id="mood-modal" className={`modal modal-bottom sm:modal-middle ${openingModal}`}>
        <div className="modal-box relative">
          {selected && <label htmlFor="go-back" className="btn btn-sm btn-circle absolute left-2 top-2" onClick={handleClearCat}><HiOutlineChevronLeft/></label>}
          <label id="close-mood-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="flex flex-col gap-y-7">
            <h3 className="font-extrabold text-2xl lg:text-5xl text-neutral text-center">I&rsquo;m feeling...</h3>
            <div className="flex flex-row flex-wrap gap-5 w-full justify-center items-center">
              {!selected 
                ? emotionsRender
                : emotionItemsRender}
            </div>
          </div>
          {/* <div className="modal-action">
            <label htmlFor="set-mood" className="btn btn-primary btn-sm md:btn-md ">Select</label>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MoodModal;