import React from 'react';
import './Service.css';
const Service = ({service}) => {
    const {title, description, icon} = service;
    return (
        <div className="col-md-4">
            <div className="singleService mt-4 rounded">
                <div className="py-3 px-4">
                    <div className="d-flex align-items-center">
                        <div>
                            <div>
                            <i className={`${icon} text-brand service-icon`}></i>

                            </div>
                        </div>
                        <div className="ms-4">
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;