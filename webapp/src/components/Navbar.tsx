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
    <nav className="navbar fixed bg-[#2E024E] shadow-xl h-20 z-50">
        <div className="flex-1">
          <a className="btn btn-ghost" onClick={() => handleItemClick("home")}><img src="logo.svg" alt="Bissonnet Medical Center Logo" width="325" height="100"/></a>
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
  )
}

export default Navbar