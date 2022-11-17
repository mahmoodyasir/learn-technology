import React from 'react';
import {FaClock, FaStar} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import './SingleCard.css'

const SingleCard = ({props}) => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/courses/${id}`)
    }
    return (
        <div onClick={() => handleClick(props?.id)} className="col-sm-12 col-md-6 col-lg-4 mb-4 highlight-color">
            <div className="card border border-0 shadow text-white" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${props?.image})`, backgroundSize: "100%"}}>
                <div className="inner-card">
                    <span className="highlight">Highlighted Course</span>
                    <div className="container pb-3">
                        <h2 className="mt-3">{props?.title}</h2>
                        <span><FaClock/> {props?.duration}</span>

                        <div className="mt-3">
                            <img style={{width:"12%"}} className="me-2 rounded-circle border border-2 border-info" src={props?.instructor?.image} alt=""/>
                            <span className="home-instructor">{props?.instructor?.name}</span>
                        </div>

                        <div className="mt-3 fs-5">
                            <span><FaStar/> Ratings: {props?.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
