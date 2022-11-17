import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import SingleCard from "./SingleCard";
import leaf from '../assets/leaf.png'
import './SingleCard.css'

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="container mt-5 pb-3">
            <div className="row">
                {
                    data?.map((item) => (
                        <SingleCard
                            key={item?.id}
                            props={item}
                        />
                    ))
                }
            </div>

            <div>
                <div>

                    <div className="card border border-0 shadow text-color-control bg-control">
                        <div className="row g-0">
                            <div className="col-md-8 col-8">
                                <div className="card-body w-100">
                                    <h5 className="card-title display-6">Contact US</h5>

                                    <div className="d-lg-flex gap-lg-5 gap-4">
                                        <div className="mb-3 top-input">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Your
                                                Name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="Write your name"/>
                                        </div>

                                        <div className="mb-3 top-input">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Your Email
                                                address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput2"
                                                   placeholder="Write your email"/>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mb-3 bottom-input">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                                      rows="3" placeholder="Write your message here"/>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <Link to="" className="contact-btn">Submit</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 col-4">
                                <img src={leaf} className="img-fluid rounded-end h-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
