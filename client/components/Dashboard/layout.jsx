import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiAdjustments, HiLogout } from 'react-icons/hi';
import { useAuth } from '../../context/AuthContext';
import Router from 'next/router';
import { HiDotsVertical } from 'react-icons/hi';

const Layout = ({children}) => {
  const { logout, currentUser, journalEntries } = useAuth();
  const [error, setError] = useState(null);

  //logout handler 
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logout();
      Router.push('/');
    } catch (err) {
      setError('Something went wrong.');
    }
  };

  // render list of entries
  const listOfEntries = journalEntries.map((entry) => {
    return (
      <li key={entry.date}>
        <Link href="/journal/entries" className="flex flex-row bg-base-100 hover:bg-neutral mb-2 justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="font-normal text-md">{entry.date.toDateString().split(' ')[0]}</div>
            <div className="font-bold text-xl">{entry.date.toDateString().split(' ')[2]}</div>
          </div>
          <div className="text-left flex-1">{entry.diary.substring(0, 30)}...</div>
          <button className="btn btn-ghost p-0"><HiDotsVertical/></button>
        </Link>
      </li>
    )
  })

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300 lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 px-2 mx-2 font-black text-2xl"><Link href="/journal">You&rsquo;re <span className="text-secondary">Ago</span></Link></div>
        </div>
        {/* <!-- Page content here --> */}
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-300 text-base-content relative">
          {/* <!-- Sidebar content here --> */}
          <li className="bg-base-300 font-black text-2xl hidden z-0 lg:block lg:z-10 lg:sticky lg:top-0"><Link href="/journal">You&rsquo;re <span className="text-secondary">Ago</span></Link></li>

          <li><Link href="/journal/write" className="bg-base-100 justify-center items-center text-2xl font-bold hover:bg-neutral my-2">+</Link></li>
          {listOfEntries}

          <li className="bg-base-300 font-semibold text-lg fixed z-10 bottom-0 flex flex-row w-full left-0 right-0">
            <Link href="/journal/settings" className="basis-1/2 justify-center"><HiAdjustments/>Settings</Link>
            <button className="basis-1/2 justify-center" onClick={(e) => logoutHandler(e)}>Sign Out<HiLogout/></button>
          </li>
        </ul>
        { error && 
          <div className="alert alert-error shadow-lg fixed right-0 bottom-0 w-1/5 z-10">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Layout;