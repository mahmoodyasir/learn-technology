import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {FaClock, FaCrown, FaDownload} from 'react-icons/fa';
import {FaRegStar} from 'react-icons/fa';
import './CourseDetail.css'
import Pdf from "react-to-pdf";

const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [20, 10]
};

const CourseDetail = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    const navigate = useNavigate();


    return (
        <div className="container mt-3 pb-5">
            {
                singleCourse ?
                    <>
                        <Container ref={ref}>
                            <Row className="d-flex justify-content-between align-content-between">
                                <Col lg="8" className="">
                                    <Card className="details-bg">
                                        <Card.Img variant="top" src={singleCourse?.image}/>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <h3>{singleCourse?.title}</h3>

                                                <Pdf targetRef={ref} filename="course-details.pdf" options={options}>
                                                    {({toPdf}) =>
                                                        <span
                                                            className="fs-5 text-primary border border-2 border-info rounded px-3 point">
                                                    <FaDownload onClick={toPdf}/>
                                                </span>
                                                    }
                                                </Pdf>


                                            </div>
                                            <Card.Text className="fs-5">
                                                {singleCourse?.description}
                                            </Card.Text>
                                            <div
                                                className="text-center d-flex justify-content-center align-items-center">
                                                <Link to={`checkout/${singleCourse?.id}`}
                                                      className="premium-btn"><FaCrown/> Get Premium Access</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>


                                <Col lg="4">

                                    <div className="d-md-block d-flex flex-column-reverse justify-content-center">
                                        <div>
                                            <div>
                                                <Card className="mt-lg-0 mt-3 details-bg">
                                                    <Card.Img variant="top" src={singleCourse?.instructor?.image}/>
                                                    <Card.Body>
                                                        <Card.Title
                                                            className="instructor fw-bold">Instructor: {singleCourse?.instructor?.name}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </div>

                                            <div>
                                                <Card className="mt-lg-5 mt-3 details-bg">
                                                    <Card.Body>
                                                        <Card.Title
                                                            className="instructor fw-bold"><FaClock/> Duration: {singleCourse?.duration}
                                                        </Card.Title>
                                                        <Card.Title
                                                            className="instructor fw-bold"><FaRegStar/> Ratings: {singleCourse?.rating}
                                                        </Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>

                                        <div className="mt-lg-5 mt-3">
                                            <Link className="btn btn-outline-info w-100 fs-4" to="/courses">Get Back To
                                                Course List</Link>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </>
                    :
                    <>
                        {
                            window.location.replace('/error')
                        }
                    </>
            }
        </div>
    );
};

export default CourseDetail;
