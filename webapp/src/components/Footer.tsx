"use client"
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    const handleItemClick = (pageName: string) => {
        const targetElement = document.getElementById(pageName);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }
    return (
        <div>
            <footer id="footer" className="footer p-10 bg-[#121212] text-white">
                <aside className="pt-4">
                    <Image src="logo.svg" alt="Bissonnet Medical Center Logo" width="350" height="100"/>
                    <p className="text-md font-bold pl-10">Your Health is Our Priority</p>
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
                    <a className="link link-hover" href="tel:2815756700">(281) 575-6700</a>
                    <a className="link link-hover" href="mailto:BissonnetMedicalCenter@yahoo.com">BissonnetMedicalCenter@yahoo.com</a>
                    <a className="link link-hover" href="tel:2815641800">Fax: (281) 564-1800</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Bissonnet Medical Center</p>
                    <p>
                    Images by <a href="https://www.freepik.com/free-vector/elegant-geometric-pattern-grey-backdrop-presentation-vector_63068629.htm#query=website%20background%20pattern&position=10&from_view=keyword&track=ais">starline, </a>
                    <a href="https://www.freepik.com/free-photo/doctor-examination-young-man-with-stethoscope-hospital_5018005.htm">jcomp, </a>
                    <a href="https://www.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_2769131.htm#query=patient&position=7&from_view=search&track=sph">rawpixel.com, </a> pressfoto (
                    <a href="https://www.freepik.com/free-photo/medical-exam_5535732.htm#query=doctor%20consultation&position=35&from_view=keyword&track=ais">1, </a>
                    <a href="https://www.freepik.com/free-photo/unrecognizable-female-doctor-sitting-couch-with-male-patient-filling-form_5839640.htm#query=patient&position=4&from_view=search&track=sph">2, </a>
                    <a href="https://www.freepik.com/free-photo/worplace-modern-hospital_5633803.htm#query=doctors%20office&position=2&from_view=search&track=ais">3</a>) and Freepik (
                    <a href="https://www.freepik.com/free-photo/doctor-vaccinating-patient-clinic_12892257.htm#query=vaccine&position=2&from_view=search&track=sph">1, </a>
                    <a href="https://www.freepik.com/free-photo/coronavirus-blood-samples-assortment-lab_18684521.htm#query=Diagnostic%20Testing&position=14&from_view=search&track=ais">2, </a>
                    <a href="https://www.freepik.com/free-photo/surgical-procedure-made-by-doctor_14008912.htm#query=minor%20surgical%20procedure&position=1&from_view=search&track=ais">3, </a>
                    <a href="https://www.freepik.com/free-photo/female-doctor-her-office-with-copy-space_13819888.htm#from_view=detail_alsolike">4</a>) on Freepik
                    </p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer