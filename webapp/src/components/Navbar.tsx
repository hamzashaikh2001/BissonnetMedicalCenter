"use client"

import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  const handleItemClick = (pageName: string) => {
    const targetElement = document.getElementById(pageName);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }
  return (
    <nav className="navbar fixed bg-base-100 shadow-xl h-20 z-50">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" onClick={() => handleItemClick("home")}>Bissonnet Medical Center</a>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-2 text-lg">
            <li className="ml-10 hover:border-b"><a onClick={() => handleItemClick("home")}>Home</a></li>
            <li className="ml-10 hover:border-b"><a onClick={() => handleItemClick("about")}>About</a></li>
            <li className="ml-10 hover:border-b"><a onClick={() => handleItemClick("services")}>Services</a></li>
            <li className="ml-10 hover:border-b"><a onClick={() => handleItemClick("contact")}>Contact</a></li>
          </ul>
        </div>
    </nav>

    /*
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
*/

    /*
    <nav className="fixed w-full h-24 shadow-xl bg-white z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 text-black">
        <Image src="/vercel.svg" alt="Logo" width={100} height={24} priority/>
        <ul className="hidden sm:flex uppercase text-black text-xl"> 
          <li className="ml-10 hover:border-b" onClick={() => handleItemClick("home")}>Home</li>
          <li className="ml-10 hover:border-b" onClick={() => handleItemClick("about")}>About</li>
          <li className="ml-10 hover:border-b" onClick={() => handleItemClick("services")}>Services</li>
          <li className="ml-10 hover:border-b" onClick={() => handleItemClick("contact")}>Contact Us</li>
        </ul>
      </div>
    </nav>
    */
  )
}

export default Navbar