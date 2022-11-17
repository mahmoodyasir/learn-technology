import React, {useContext} from 'react';
import {Card, Button} from "react-bootstrap";
import { FaClock, FaUserClock } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import './AllCourseSection.css'
import {Link} from "react-router-dom";
import {AuthContext} from "../../Contexts/AuthProvider";

const AllCourseSection = ({data}) => {

    const setData = (id) => {
      localStorage.setItem("id", id);
    }

    return (
        <div>
            <div>

            </div>
            <div className="py-2">
            <Card className="border border-0 shadow-box card-list-bg-control">
                <Card.Header className="border border-0">
                    <div className="d-lg-flex align-items-lg-center d-md-flex align-items-md-center d-flex align-items-center">
                        <div className="w-25">
                            <p><span><img className="img-fluid rounded w-75" src={data?.instructor?.image} alt=""/></span></p>
                        </div>
                        <div className="ms-2">
                            <p className="pb-0 mb-0"><span className="instructor">Instructor: </span>{data?.instructor?.name}</p>
                            <p><span className="instructor">Published: </span>{data?.instructor?.date}</p>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Link onClick={() => {setData(data?.id)}} className="text-decoration-none" to={`/courses/${data?.id}`}><Card.Title className="text-center title">{data?.title}</Card.Title></Link>
                    <Card.Img className="rounded" variant="top" src={data?.image} />
                    <Card.Text>
                        {data?.description.slice(0,114) + "..."}
                    </Card.Text>
                    <div className="d-flex justify-content-between">

                        <div>
                            <p><span className="instructor fw-bold"><FaClock/> Duration: {data?.duration}</span></p>
                        </div>

                        <div>
                            <p><span className="instructor fw-bold"><FaRegStar/> Ratings: {data?.rating}</span></p>
                        </div>

                    </div>
                </Card.Body>
                <Card.Footer className="border border-0 text-center">
                    <Link onClick={() => {setData(data?.id)}} className="details" to={`/courses/${data?.id}`}>See Course Details</Link>
                </Card.Footer>
            </Card>
        </div>
        </div>
    );
};

export default AllCourseSection;
