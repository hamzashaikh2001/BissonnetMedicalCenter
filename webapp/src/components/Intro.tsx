import React from 'react'
import Carousel from './Carousel'

const Intro = () => {
    return (
        <div id="home" className="h-screen bg-primary-content">
            <div className="flex flex-col items-start justify-center absolute h-full z-10 pl-16 space-y-6 dark:text-white">
                <h1 className="text-6xl font-extrabold">Your Health is Our Priority</h1>
                <p className="text-xl">For over twenty years, our clinic has strived to deliver quality healthcare at the most affordable rates.</p>
            </div>
            <Carousel />
        </div>



/*
            <div className="carousel h-screen w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="/tempBG.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="/tempBG.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="/tempBG.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="/tempBG.jpg" className="w-full" />
                </div>
                <div className="flex items-end justify-center absolute h-full w-full z-10 pb-4 gap-4">
                    <a href="#item1" className="btn btn-xs">1</a> 
                    <a href="#item2" className="btn btn-xs">2</a> 
                    <a href="#item3" className="btn btn-xs">3</a> 
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>

*/




        /*
            <div className="carousel h-screen w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/tempBG.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/tempBG.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/tempBG.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/tempBG.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
        */
        /*
        <div id="home" className="flex min-h-screen flex-col items-start justify-center p-16 space-y-6 bg-primary-content text-black">
            <h1 className="text-6xl font-extrabold">Your Health is Our Priority</h1>
            <p className="text-xl">For over twenty years, our clinic has strived to deliver quality healthcare at the most affordable rates.</p>
        </div>
        */
    )
}

export default Intro