import React from 'react';
import { useAuth } from '../../context/AuthContext';

const DashboardHero = () => {
  const { currentUser } = useAuth();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Welcome Back, {currentUser.displayName.split(' ')[0]}</h1>
          <p className="py-6">Dashboard main page is not yet ready. Come back and check for updates!</p>
          <button className="btn btn-primary">Journal Today</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHero