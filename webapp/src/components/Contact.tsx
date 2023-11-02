import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className="flex min-h-screen flex-col pt-28 space-y-6 bg-primary-content">
            <div className="flex flex-col items-center text-black">
                <h2 className="text-4xl font-bold">Contact Us</h2>
                <h3 className="text-2xl">Get in contact with us!</h3>
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full text-white">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.5682662450795!2d-95.5787357!3d29.674300100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dd5e4b7ea63f%3A0x9ed33066f5fbaf93!2sBissonnet%20Medical%20Center!5e0!3m2!1sen!2sus!4v1696726547260!5m2!1sen!2sus" width="100%" height="531" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="min-w-max w-screen lg:w-1/3 px-20 py-16 bg-purple-800 items-center space-y-6">
                    <h2 className="text-3xl font-bold py-2">Houston, TX</h2>
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
/*
        <div id="contact" className="flex min-h-screen flex-col items-center justify-start p-28 space-y-6 bg-slate-100 text-black">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <h3 className="text-2xl">Get in contact with us!</h3>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between h-full w-full px-4 2xl:px-16">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.5682662450795!2d-95.5787357!3d29.674300100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dd5e4b7ea63f%3A0x9ed33066f5fbaf93!2sBissonnet%20Medical%20Center!5e0!3m2!1sen!2sus!4v1696726547260!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="pt-10 lg:pt-0">
                    <div className="card w-96 glass bg-slate-300">
                        <div className="card-body">
                            <Link href="https://maps.app.goo.gl/GmTvbKSDd3ViN7Yz9">
                                <h3 className="card-title text-2xl">Address</h3>
                                11327 Bissonnet St,<br/>Houston, TX 77099
                            </Link>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="card w-96 glass bg-slate-300">
                        <div className="card-body">
                            <Link href="tel:2815756700">
                                <h3 className="card-title text-2xl">Phone</h3>
                                (281) 575-6700
                            </Link>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="card w-96 glass bg-slate-300">
                        <div className="card-body">
                            <Link href="mailto:BissonnetMedicalCenter@yahoo.com">
                                <h3 className="card-title text-2xl">Email</h3>
                                BissonnetMedicalCenter@yahoo.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
*/
    )
}

export default Contact