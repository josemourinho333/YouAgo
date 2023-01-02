import React from 'react';
import Link from 'next/link';

const layout = ({children}) => {
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
          <div className="flex-1 px-2 mx-2 font-black text-2xl"><Link href="/journal">You&rsquo;re <span class="text-secondary">Ago</span></Link></div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-300 text-base-content relative">
          {/* <!-- Sidebar content here --> */}
          <li className="bg-base-300 font-black text-2xl hidden z-0 lg:block lg:z-10 lg:sticky lg:top-0"><Link href="/journal">You&rsquo;re <span class="text-secondary">Ago</span></Link></li>
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      
      </div>
    </div>
  )
}

export default layout;