import React from 'react';
import moment from 'moment';

const WriteIndex = () => {
  return (
    <div className="flex flex-col items-start p-5 gap-y-5">
      <h1 className="text-neutral font-bold text-4xl lg:text-6xl">{moment().format('ll')}</h1>
      <textarea className="textarea textarea-ghost p-0 resize-none w-full min-h-[80vh] bg-base-neutral text-xl lg:text-2xl placeholder:text-xl placeholder:lg:text-2xl placeholder:text-neutral focus:outline-none" placeholder="Just write whatever's in your mind"></textarea>

    </div>
  )
}

export default WriteIndex;