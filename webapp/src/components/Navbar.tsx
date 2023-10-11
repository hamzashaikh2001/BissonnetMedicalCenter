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
    <nav className="fixed w-full h-24 shadow-xl bg-white">
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
  )
}

export default Navbar