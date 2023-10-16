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
            <footer className="footer footer-center p-4 bg-slate-900 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Bissonnet Medical Center</p>
                    <p>
                    Images by <a href="https://www.freepik.com/free-photo/doctor-examination-young-man-with-stethoscope-hospital_5018005.htm">jcomp, </a>
                    <a href="https://www.freepik.com/free-photo/medical-exam_5535732.htm#query=doctor%20consultation&position=35&from_view=keyword&track=ais">pressfoto, </a> and Freepik (
                    <a href="https://www.freepik.com/free-photo/doctor-vaccinating-patient-clinic_12892257.htm#query=vaccine&position=2&from_view=search&track=sph">1, </a>
                    <a href="https://www.freepik.com/free-photo/coronavirus-blood-samples-assortment-lab_18684521.htm#query=Diagnostic%20Testing&position=14&from_view=search&track=ais">2, </a>
                    <a href="https://www.freepik.com/free-photo/surgical-procedure-made-by-doctor_14008912.htm#query=minor%20surgical%20procedure&position=1&from_view=search&track=ais">3</a>) on Freepik
                    </p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer