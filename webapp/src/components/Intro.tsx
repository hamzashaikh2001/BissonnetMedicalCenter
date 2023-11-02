import React from 'react'
import Carousel from './Carousel'
//text-rose-800
const Intro = () => {
    return (
        <div id="home" className="h-screen bg-primary-content">
            <div className="flex flex-col items-start justify-center absolute h-full z-10 pl-8 sm:pl-16 space-y-6 text-black">
                <h1 className="text-6xl font-extrabold">Your Health is Our Priority</h1>
                <p className="text-xl">For over twenty-five years, our clinic has strived to deliver quality healthcare at the most affordable rates.</p>
            </div>
            <Carousel />
        </div>
    )
}

export default Intro