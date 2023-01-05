import React from 'react';
import { useAuth } from '../context/AuthContext';

const Alert = () => {
  const { closeAlert, showSuccess } = useAuth();

  if (showSuccess) {
    return (
      <div className="alert alert-success shadow-lg absolute bottom-5 right-5 w-1/4 max-w-1/4">
        <div className="flex flex-row justify-between w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{showSuccess}</span>
          <button className="btn btn-ghost text-xl" onClick={closeAlert}>✕</button>
        </div>
      </div>
    )
  }
  
  return (
    <></>
  )
}

export default Alert;