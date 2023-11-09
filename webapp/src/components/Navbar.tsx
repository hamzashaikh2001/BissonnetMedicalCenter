"use client"
import React from 'react'

const Navbar = () => {
  const handleItemClick = (pageName: string) => {
    const targetElement = document.getElementById(pageName);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }
  return (
    <nav className="navbar fixed bg-[#2E024E] shadow-xl h-20 z-50 text-white">
        <div className="md:flex-1">
          <button className="btn btn-ghost max-w-full" onClick={() => handleItemClick("home")}><img src="logo.svg" alt="Bissonnet Medical Center Logo" width="325" height="26" decoding= "async" fetchPriority= "high" /></button>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-2 text-lg">
            <li className="ml-10 hover:border-b hidden lg:block"><button onClick={() => handleItemClick("home")}>Home</button></li>
            <li className="ml-10 hover:border-b"><button onClick={() => handleItemClick("about")}>About</button></li>
            <li className="ml-10 hover:border-b"><button onClick={() => handleItemClick("services")}>Services</button></li>
            <li className="ml-10 hover:border-b"><button onClick={() => handleItemClick("contact")}>Contact</button></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar