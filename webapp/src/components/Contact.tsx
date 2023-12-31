import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className="flex min-h-screen flex-col pt-28 space-y-6 bg-white">
            <div className="flex flex-col items-center text-black">
                <h2 className="text-4xl font-bold">Contact Us</h2>
                <h3 className="text-2xl">Get in contact with us!</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center w-full text-white">
                <iframe title="Google Map for Bissonnet Medical Center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.5682662450795!2d-95.5787357!3d29.674300100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dd5e4b7ea63f%3A0x9ed33066f5fbaf93!2sBissonnet%20Medical%20Center!5e0!3m2!1sen!2sus!4v1696726547260!5m2!1sen!2sus" width="100%" height="539" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="min-w-max w-full md:w-1/3 md:px-20 py-16 bg-purple-800 flex flex-col items-center md:items-start space-y-6">
                    <h2 className="text-3xl font-bold">Houston, TX</h2>
                    <a className="link" href="https://maps.app.goo.gl/GmTvbKSDd3ViN7Yz9">
                        <h3 className="text-2xl font-bold">11327 Bissonnet St,<br/>Houston, TX 77099</h3>
                    </a>
                    <pre>
                        <p>
                            Hours of Operation:<br />
                            Monday:    10 am - 5pm<br />
                            Tuesday:   10 am - 5pm<br />
                            Wednesday: 10 am - 5pm<br />
                            Thursday:  10 am - 5pm<br />
                            Friday:    10 am - 5pm<br />
                            Saturday:  Closed     <br />
                            Sunday:    Closed     <br />
                        </p>
                    </pre>
                    <div className="flex w-64 justify-between">
                        <a className="btn bg-purple-900 hover:bg-[#2E024E] text-white" href="tel:2815756700">(281) 575-6700</a>
                        <a className="btn bg-purple-900 hover:bg-[#2E024E] text-white" href="mailto:BissonnetMedicalCenter@yahoo.com">Our Email</a>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Contact