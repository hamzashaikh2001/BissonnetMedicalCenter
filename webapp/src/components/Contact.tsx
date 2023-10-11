import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className="flex min-h-screen flex-col items-center justify-start p-32 space-y-6 bg-black text-white">
            <h2 className="text-4xl">Contact Us</h2>
            <h3 className="text-2xl">Get in contact with us</h3>
            <div className="flex flex-row items-center justify-between h-full w-full px-4 2xl:px-16">
                <div>
                    <h3 className="text-2xl">Phone</h3>
                    <Link href="tel:2815756700">(281) 575-6700</Link>
                    <h3 className="text-2xl">Email</h3>
                    <Link href="mailto:fake@temp.com">fake@temp.com</Link>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.5682662450795!2d-95.5787357!3d29.674300100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dd5e4b7ea63f%3A0x9ed33066f5fbaf93!2sBissonnet%20Medical%20Center!5e0!3m2!1sen!2sus!4v1696726547260!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact