"use client"
import React from 'react'

const Carousel = () => {
    const handleItemClick = (c: number) => {
        var targetElement = document.getElementById("item" + c);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: "smooth", block: "start"});
        }
        for (let i = 1; i <= 4; i++) {
            targetElement = document.getElementById("CarouselButton" + i);
            if (targetElement) {
                targetElement.style.backgroundColor = (i == c) ? 'white' : '#64748b';
            }
        }
    }
    return (
        <div className="carousel h-screen w-full">
            <div id="item1" className="carousel-item w-full">
                <img src="Slides/Slide1.jpeg" className="w-full pt-20" />
            </div>
            <div id="item2" className="carousel-item w-full">
                <img src="Slides/Slide2.jpg" className="w-full  pt-20" />
            </div>
            <div id="item3" className="carousel-item w-full">
                <img src="Slides/Slide3.jpg" className="w-full pt-20" />
            </div>
            <div id="item4" className="carousel-item w-full">
                <img src="Slides/Slide4.jpg" className="w-full pt-20" />
            </div>
            <div className="flex items-end justify-center absolute h-full w-full z-10 pb-6 gap-2">
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick(1)}>
                    <a id="CarouselButton1" className="w-8 h-1 bg-white"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick(2)}>
                    <a id="CarouselButton2" className="w-8 h-1 bg-slate-500"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick(3)}>
                    <a id="CarouselButton3" className="w-8 h-1 bg-slate-500"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick(4)}>
                    <a id="CarouselButton4" className="w-8 h-1 bg-slate-500"></a>
                </div>
            </div>
        </div>
    )
}

export default Carousel