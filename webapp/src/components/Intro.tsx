import React from 'react'
import Carousel from './Carousel'

const Intro = () => {
    return (
        <div id="home" className="h-screen bg-[url('/background.webp')]">
            <div className="flex flex-col items-start justify-center absolute h-full z-10 px-8 sm:px-16 space-y-6 text-black">
                <h1 className="text-6xl font-extrabold w-44 sm:w-full">Your <span className="text-rose-800">Health</span> is Our <span className="text-green-800">Priority</span></h1>
                <p className="text-xl font-bold">For over twenty-five years, our clinic has strived to deliver quality healthcare at the most affordable rates.</p>
            </div>
            <div className="hidden md:block">
                <Carousel />
            </div>
            <img src="/MobileBG.webp" alt="Doctor with a stethoscope" width="375" height="652" sizes="100vw" className="w-full h-full pt-20 block xs:hidden" decoding= "async"/>
        </div>
    )
}

export default Intro