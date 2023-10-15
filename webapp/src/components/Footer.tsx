"use client"
import React from 'react'

const Footer = () => {
    const handleItemClick = (pageName: string) => {
        const targetElement = document.getElementById(pageName);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }
    return (
        <div>
            <footer id="footer" className="footer p-10 bg-base-300 text-base-content">
                <aside>
                    <img src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24}/>
                    <header className="text-xl font-bold dark:text-white">Bissonnet Medical Center</header>
                    <p className="text-md font-bold dark:text-white">Your Health is Our Priority</p>
                </aside>
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover" onClick={() => handleItemClick("home")}>Home</a> 
                    <a className="link link-hover" onClick={() => handleItemClick("about")}>About Us</a> 
                    <a className="link link-hover" onClick={() => handleItemClick("services")}>Services</a> 
                    <a className="link link-hover" onClick={() => handleItemClick("contact")}>Contact Us</a> 
                </nav> 
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover" href="https://maps.app.goo.gl/GmTvbKSDd3ViN7Yz9">11327 Bissonnet St,<br/>Houston, TX 77099</a>
                    <a className="link link-hover" href="mailto:fake@temp.com">fake@temp.com</a>
                    <a className="link link-hover" href="tel:2815756700">(281) 575-6700</a> 
                </nav>
            </footer>
            <footer className="footer footer-center p-4 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Bissonnet Medical Center</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer