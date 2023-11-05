import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <div id="services" className="flex flex-col min-h-screen pt-32 space-y-6 bg-white text-black">
            <div className= "flex flex-col items-center text-center">
                <h2 className="text-4xl font-bold">Services</h2>
                <h3 className="text-2xl">Below are a few of our services!</h3>
            </div>
            <div className="flex flex-row justify-evenly"></div>
            <div className="carousel carousel-center max-w-screen p-4 space-x-8 bg-slate-100">
                <div className="carousel-item">
                    <div className="card w-96 bg-slate-300 shadow-xl">
                        <figure><Image src="/Images/MedicalConsultation.jpg" alt="General Medical Consultations" width="384" height="256"/></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">General Medical Consultations</h2>
                            <p className="text-center">
                                Your path to optimal health starts here! Our general medical consultations provide a one-on-one 
                                opportunity to discuss your health concerns and receive expert advice from Dr. Muhammad Shaikh.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-slate-300 shadow-xl">
                        <figure><Image src="/Images/WellnessCheckUp.jpg" alt="Preventive Care & Wellness Check-Ups" width="384" height="256"/></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Preventive Care & Check-Ups</h2>
                            <p className="text-center">Don&apos;t wait for health issues to arise. Our thorough wellness assessments are 
                            designed to keep you feeling your best, ensuring early detection and proactive solutions to safeguard 
                            your health.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-slate-300 shadow-xl">
                        <figure><Image src="/Images/Vaccination.jpg" alt="Immunizations and Vaccinations" width="384" height="256"/></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Immunizations and Vaccinations</h2>
                            <p className="text-center">Your health is your wealth, and we&apos;re here to protect it. Our clinic offers a wide range 
                            of immunizations and vaccines for people of all ages. Stay safe and stay healthy with our immunization services.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-slate-300 shadow-xl">
                        <figure><Image src="/Images/DiagnosticTesting.jpg" alt="Diagnostic Testing" width="384" height="256"/></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Diagnostic Testing</h2>
                            <p className="text-center">Precision and peace of mind are just a test away. Our diagnostic testing services are here 
                            to provide you with accurate and timely health insights. Get the answers you need for a healthier you.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-slate-300 shadow-xl">
                        <figure><Image src="/Images/MinorSurgicalProcedure.jpg" alt="Minor Surgical Procedures" width="384" height="256"/></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Minor Surgical Procedures</h2>
                            <p className="text-center">Minor surgical procedures, such as stitches, are offered with the utmost 
                            precision and care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services