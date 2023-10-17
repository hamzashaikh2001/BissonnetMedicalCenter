import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id ="about" className="min-h-screen flex items-center text-black md:px-40 py-24 bg-slate-100">
            <div className="hero bg-slate-300 py-2">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-x-40">
                    <img src="/temp.png" className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="text-4xl font-bold">About Us</h1>
                        <p className="text-xl py-6">
                            Content for about us. <br />
                            Blah blah Blah Blah Blah Blah<br />
                            blah blah blah blah blah blah<br />
                            Blah blah Blah Blah Blah Blah<br />
                            blah blah blah blah blah blah<br />
                            Blah blah Blah Blah Blah Blah<br />
                            blah blah blah blah blah blah<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>







/* p-28 bg-slate-500
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