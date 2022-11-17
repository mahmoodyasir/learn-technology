import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useLoaderData} from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import AllCourseSection from "../AllCourseSection/AllCourseSection";
import Axios from "axios";
import {domain} from "../../rootdomain";
import './Courses.css'

const Courses = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            await Axios({
                method: "get",
                url: `${domain}/courses`
            }).then(response => {
                setData(response.data);
            })
        }
        getData();
    }, []);


    return (
        <div className="container mt-3 pb-5">
            <Container>
                <Row>
                    <Col lg="4" className="card border border-0 course-bg-control shadow rounded d-none d-lg-block ms-lg-3 d-lg-flex align-items-lg-center">
                         <LeftSideBar/>
                    </Col>

                    <Col lg="8" className="row">
                        {
                            data?.map((item) => (
                                <div key={item?.id} className="col-lg-6 col-md-6">
                                    <AllCourseSection
                                        data={item}
                                    />
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;
