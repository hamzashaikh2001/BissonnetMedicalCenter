import React from 'react'
import Carousel from './Carousel'

const Intro = () => {
    return (
        <div id="home" className="h-screen bg-white">
            <div className="flex flex-col items-start justify-center absolute h-full z-10 px-8 sm:px-16 space-y-6 text-rose-800">
                <h1 className="text-6xl font-extrabold">Your Health is Our Priority</h1>
                <p className="text-xl">For over twenty-five years, our clinic has strived to deliver quality healthcare at the most affordable rates.</p>
            </div>
            <Carousel />
        </div>
    )
}

export default Intro