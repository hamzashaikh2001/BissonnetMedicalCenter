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
            <div className="flex items-end justify-center absolute h-full w-full z-10 pb-6 gap-2">
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick("item1")}>
                    <a className="w-8 h-1 bg-white"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick("item2")}>
                    <a className="w-8 h-1 bg-white"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick("item3")}>
                    <a className="w-8 h-1 bg-white"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick("item4")}>
                    <a className="w-8 h-1 bg-white"></a>
                </div>
            </div>
        </div>
    )
}

/*
                <a className="w-8 h-1 bg-white cursor-pointer" onClick={() => handleItemClick("item1")}></a>
                <a className="w-8 h-1 bg-white cursor-pointer" onClick={() => handleItemClick("item2")}></a> 
                <a className="w-8 h-1 bg-white cursor-pointer" onClick={() => handleItemClick("item3")}></a> 
                <a className="w-8 h-1 bg-white cursor-pointer" onClick={() => handleItemClick("item4")}></a>
*/


export default Carousel