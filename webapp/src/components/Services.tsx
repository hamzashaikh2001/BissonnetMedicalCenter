import React from 'react'

const Services = () => {
    return (
        <div id="services" className="flex flex-col min-h-screen py-32 space-y-6 bg-primary-content">
            <div className= "flex flex-col items-center text-black">
                <h2 className="text-4xl font-bold">Services</h2>
                <h3 className="text-2xl">Below are a few of our services!</h3>
            </div>
            <div className="flex flex-row justify-evenly"></div>
            <div className="carousel carousel-center max-w-screen p-4 space-x-8 bg-neutral">
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/MedicalConsultation.jpg" alt="General Medical Consultations" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">General Medical Consultations</h2>
                            <p>THIS IS SERVICE 1</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/WellnessCheckUp.jpg" alt="Preventive Care & Wellness Check-Ups" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Preventive Care & Check-Ups</h2>
                            <p>THIS IS SERVICE 2</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/Vaccination.jpg" alt="Immunizations and Vaccinations" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Immunizations and Vaccinations</h2>
                            <p>THIS IS SERVICE 3</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/DiagnosticTesting.jpg" alt="Diagnostic Testing" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Diagnostic Testing</h2>
                            <p>THIS IS SERVICE 4</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/MinorSurgicalProcedure.jpg" alt="Minor Surgical Procedures" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">Minor Surgical Procedures</h2>
                            <p>THIS IS SERVICE 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services