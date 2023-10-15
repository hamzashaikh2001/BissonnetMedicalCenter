"use client"
import React from 'react'

const Carousel = () => {
    const handleItemClick = (pageName: string) => {
        const targetElement = document.getElementById(pageName);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }
    return (
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
                <a className="btn btn-xs" onClick={() => handleItemClick("item1")}></a>
                <a className="btn btn-xs" onClick={() => handleItemClick("item2")}></a> 
                <a className="btn btn-xs" onClick={() => handleItemClick("item3")}></a> 
                <a className="btn btn-xs" onClick={() => handleItemClick("item4")}></a>
            </div>
        </div>
    )
}

export default Carousel