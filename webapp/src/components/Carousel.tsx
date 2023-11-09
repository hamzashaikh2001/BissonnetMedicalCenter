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
                <img src="/Slides/Slide1.webp" alt="Doctor with a stethoscope" width="1520" height="740" sizes="100vw" className="w-full h-auto pt-20" decoding= "async" fetchPriority= "high"/>
            </div>
            <div id="item2" className="carousel-item w-full">
                <img src="/Slides/Slide2.webp" alt="Doctor talking to a patient" width="1520" height="740" sizes="100vw" className="w-full h-auto pt-20" decoding= "async" />
            </div>
            <div id="item3" className="carousel-item w-full">
                <img src="/Slides/Slide3.webp" alt="Doctor taking vitals" width="1520" height="740" sizes="100vw" className="w-full h-auto pt-20" decoding= "async" />
            </div>
            <div id="item4" className="carousel-item w-full">
                <img src="/Slides/Slide4.webp" alt="Organized Clinic Office" width="1520" height="740" sizes="100vw" className="w-full h-auto pt-20" decoding= "async" />
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