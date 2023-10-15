import React from 'react'

const Services = () => {
    return (
        <div id="services" className="flex flex-col min-h-screen py-32 space-y-6 bg-primary-content">
            <div className= "flex flex-col items-center text-black">
                <h2 className="text-4xl font-bold">Services</h2>
                <h3 className="text-2xl">Below are a few of our services!</h3>
            </div>
            <div className="flex flex-row justify-evenly">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/temp.png" alt="SERVICE1" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">SERVICE1</h2>
                        <p>THIS IS SERVICE 1</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/temp.png" alt="SERVICE2" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">SERVICE2</h2>
                        <p>THIS IS SERVICE 2</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/temp.png" alt="SERVICE3" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SERVICE3</h2>
                    <p>THIS IS SERVICE 3</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services