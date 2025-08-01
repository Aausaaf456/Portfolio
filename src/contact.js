import React from 'react';

import Linkedin from './image/linkein.png';

const contact = () => {
    return (
        <div className="container my-5 py-5 min-vh-100" id="contact">
            <h1 className="text-center mb-5 fs-2">Contact</h1>

            <div className="row justify-content-center g-4">

                <div className="col-md-5">
                    <div className="card shadow p-3 text-center h-100">

                        <h5 className="card-title mt-2">Email</h5>
                        <p className="card-text fs-5">
                            <a href="mailto:aausaafkhan@gmail.com" className="text-decoration-none text-dark">
                                aausaafkhan@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* LinkedIn Card */}
                <div className="col-md-5">
                    <div className="card shadow p-3 text-center h-100">

                        <h5 className="card-title mt-2">LinkedIn</h5>
                        <a
                            href="https://www.linkedin.com/in/ausaaf-khan-40a188229"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none fs-5"
                        >
                            <img
                                src={Linkedin}
                                alt="LinkedIn"
                                className="rounded-circle mb-2"
                                style={{ width: '60px', height: '60px' }}
                            />
                            <div>linkedin.com/in/MyProfile</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;
