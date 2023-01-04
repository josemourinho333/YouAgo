import React from 'react';

const MoodCategory = ({emotionCategory, emotionItems}) => {
  console.log('ere', emotionItems);
  return (
    <div className="uppercase text-md font-medium bg-base-300 rounded-lg p-2 w-[150px] h-[150px] flex justify-center items-center hover:bg-neutral">
      {emotionCategory}
    </div>
  )
}

export default MoodCategory;