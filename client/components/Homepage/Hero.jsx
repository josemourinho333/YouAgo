import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import Router from 'next/router';

const Hero = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      Router.push('/journal');
    }
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold lg:text-8xl">You&rsquo;re Ago</h1>
          <p className="py-6 text-xl lg:text-3xl">
            Write to your highest future self and see how far you&rsquo;ve come a year ago. A free journaling app to track your day and your mood.<br/>
          </p>
          <div className="flex flex-row gap-5 justify-center">
            {/* <button className="btn btn-primary"><Link href="/journal">Get Started</Link></button> */}
            <button className="btn btn-primary"><Link href="/login">Log In or Sign Up</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;