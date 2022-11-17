import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import {Card, Button} from "react-bootstrap";
import '../AllCourseSection/AllCourseSection.css'
import './CheckOut.css'
import {IoBagCheckOutline} from "react-icons/io5";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'


const CheckOut = () => {
    const data = useLoaderData();
    const navigate = useNavigate();

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const purchase = () => {
        toast.success("You successfully bought this course. You'll be navigate in homepage in 3 seconds.");
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-center">
                <Card style={{width: '30rem'}} className="border border-0 shadow-box">
                    <Card.Body>
                        <Card.Title className="fs-4">Your Cart</Card.Title>
                        <Card.Subtitle className="mt-3 text-muted fs-5">Course Title: <span
                            className="text-success">{data?.title}</span> </Card.Subtitle>
                        <Card.Subtitle className="mt-3 text-muted fs-5">Author: <span
                            className="text-success">{data?.instructor?.name}</span></Card.Subtitle>
                        <Card.Subtitle className="mt-3 text-muted fs-5">Duration: <span
                            className="text-success">{data?.duration}</span></Card.Subtitle>
                        <Card.Subtitle className="mt-3 text-muted fs-5">Quantity: <span
                            className="text-success">1</span></Card.Subtitle>
                        <Card.Subtitle className="mt-3 text-muted fs-5">Purchase Date: <span
                            className="text-success">{currentDate}</span></Card.Subtitle>

                        <div className="mt-3">
                            <Link onClick={purchase} to="" className="checkout-btn fs-5"><IoBagCheckOutline
                                className="pb-1 fs-3"/> Check Out</Link>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CheckOut;
