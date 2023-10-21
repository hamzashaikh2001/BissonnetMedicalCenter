import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id ="about" className="min-h-screen flex items-center text-black md:px-40 py-24 bg-slate-100">
            <div className="hero bg-slate-300 p-2">
                <div className="hero-content flex-col lg:flex-row-reverse xl:gap-x-24">
                    <img src="/temp.png" className="max-w-sm rounded-lg shadow-2xl"/>
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-bold flex justify-center">About Us</h1>
                        <p className="text-xl py-6 text-justify">
                            Bissonnet Medical Center, established over two decades ago, 
                            is a trusted and enduring healthcare practice dedicated to 
                            serving our community. Led by Dr. Muhammad Shaikh, a specialist 
                            in Internal Medicine, our clinic has been a beacon of expertise 
                            and compassionate care in Houston, Texas. With a legacy of over 20 
                            years, we continue to prioritize your health and well-being, 
                            providing the highest standard of medical services and a commitment 
                            to improving the lives of our patients. At Bissonnet Medical Center, 
                            experience, expertise, and a deep-rooted sense of community are at 
                            the core of everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </div>

/*
        <div id ="about" className="flex flex-row min-h-screen items-center justify-evenly p-28 bg-slate-500 dark:text-white">
            <div className="flex-col">
                <h2 className="text-4xl font-bold">About Us</h2>
                <p className="text-xl">
                    Content for about us. <br />
                    Blah blah Blah Blah Blah Blah<br />
                    blah blah blah blah blah blah<br />
                    Blah blah Blah Blah Blah Blah<br />
                    blah blah blah blah blah blah<br />
                    Blah blah Blah Blah Blah Blah<br />
                    blah blah blah blah blah blah<br />
                </p>
            </div>
            <Image src="/temp.png" alt="Staff Image" width={400} height={600} priority/>
        </div>
*/
    )
}

export default About