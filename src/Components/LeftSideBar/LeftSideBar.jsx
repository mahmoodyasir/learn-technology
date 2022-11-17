import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {domain} from "../../rootdomain";

const LeftSideBar = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`${domain}/courses`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    // console.log(item?.id)
    return (
        <div className="w-75 text-lg-center sticky-top">
            <div className="">
                <h3 className="display-6">Courses List: </h3>
                <div className="w-100">
                    {
                        item?.map((course) => (
                            <h6 key={course?.id}><Link className="btn btn-outline-info w-100"
                                                       to={`/courses/${course?.id}`}>{course.title}</Link></h6>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;
