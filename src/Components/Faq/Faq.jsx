import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {domain} from "../../rootdomain";
import './Faq.css'

const Faq = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getFaqData = async () => {
            await Axios({
                method: "get",
                url: `${domain}/faq`
            }).then(response => {
                console.log(response.data);
                setData(response.data);
            })
        }
        getFaqData();
    }, []);


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5 display-6 faq-head-bg">Frequently Asked Questions</h2>
            <div className="row justify-content-center">

                {
                    data?.map((item) => (
                        <>
                            <div key={item?.id} id="faq-bg-control" className="card border border-0 shadow text-bg-light mb-3 col-lg-7 col-7">
                                <div className="card-body">
                                    <h5 className="card-title">{item?.id}) {item?.questions}</h5>
                                    <p className="card-text">{item?.ans}</p>
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </div>
    );
};

export default Faq;
