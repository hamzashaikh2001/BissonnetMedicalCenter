import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
    <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 text-black">
      <Image src="/vercel.svg" alt="Logo" width={100} height={24} priority/>
      <ul className="hidden sm:flex uppercase text-black text-xl">
        <li className="ml-10 hover:border-b"><Link href="https://example.com">Home</Link></li>
        <li className="ml-10 hover:border-b"><Link href="https://example.com">About</Link></li>
        <li className="ml-10 hover:border-b"><Link href="https://example.com">Services</Link></li>
        <li className="ml-10 hover:border-b"><Link href="https://example.com">Contact Us</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar