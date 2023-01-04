import React from 'react';

const MoodCategory = ({emotionCategory, emotionItems, handleCategorySelect}) => {
  return (
    <div className="uppercase text-md font-medium bg-base-300 rounded-lg p-2 w-[150px] h-[150px] flex justify-center items-center hover:bg-neutral" onClick={() => handleCategorySelect(emotionCategory, emotionItems)}>
      {emotionCategory}
    </div>
  )
}

export default MoodCategory;