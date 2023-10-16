"use client"
import React from 'react'

const Carousel = () => {
    var previous = "CarouselButton1"
    const handleItemClick = (pageName: string, buttonName: string) => {
        const targetElement = document.getElementById(pageName);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: "smooth", block: "start"});
        }
        const prevElement = document.getElementById(previous)
        if (prevElement) {
            prevElement.style.backgroundColor = "#64748b";
        }
        const buttonElement = document.getElementById(buttonName);
        if (buttonElement) {
            buttonElement.style.backgroundColor = "white";
        }
        previous = buttonName
    }
    /*
    const interval = setInterval(() => {
        handleItemClick("Item".concat(), "CarouselButton".concat("1"));
      }, 6000);
    */
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
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick("item1", "CarouselButton1")}>
                    <a id="CarouselButton1" className="w-8 h-1 bg-white"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick("item2", "CarouselButton2")}>
                    <a id="CarouselButton2" className="w-8 h-1 bg-slate-500"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick("item3", "CarouselButton3")}>
                    <a id="CarouselButton3" className="w-8 h-1 bg-slate-500"></a>
                </div>
                <div className="w-8 h-5 cursor-pointer flex items-center" onClick={() => handleItemClick("item4", "CarouselButton4")}>
                    <a id="CarouselButton4" className="w-8 h-1 bg-slate-500"></a>
                </div>
            </div>
        </div>
    )
}

export default Carousel