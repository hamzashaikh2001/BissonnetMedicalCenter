import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id ="about" className="min-h-screen flex items-center text-black md:px-40 md:py-24 bg-slate-100">
            <div className="hero bg-slate-300 p-2">
                <div className="hero-content flex-col xl:flex-row-reverse xl:gap-x-24">
                    <Image src="/Images/AboutUs.jpg" alt="Image of Dr. Muhammad Shaikh" width="0" height="0" sizes="100vw" className="w-full h-auto max-w-sm rounded-lg shadow-2xl"/>
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-bold flex justify-center">About Us</h1>
                        <p className="text-xl py-6 text-center sm:text-justify">
                            Bissonnet Medical Center, established over two decades ago, 
                            is a trusted and enduring healthcare practice dedicated to 
                            serving our community. Led by Dr. Muhammad Shaikh, a skilled specialist 
                            in Internal Medicine, our clinic has been a beacon of expertise 
                            and compassionate care in Houston, Texas. With a legacy of over 25 
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
    )
}

export default About