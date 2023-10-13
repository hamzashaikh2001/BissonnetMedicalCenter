import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id ="about" className="flex flex-row min-h-screen items-center justify-evenly p-28 bg-black text-white">
            <div className="flex-col">
                <h2 className="text-4xl">About Us</h2>
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
    )
}

export default About