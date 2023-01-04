import React from 'react'

const MoodModal = () => {
  return (
    <>
      <input type="checkbox" id="set-mood" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
        <label htmlFor="set-mood" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor="set-mood" className="btn">Submit</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoodModal;