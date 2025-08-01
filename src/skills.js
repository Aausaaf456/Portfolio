import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
function  skills()
{
    return(

        <div className="container my-5 min-vh-100" id="skill">
            <div className="d-flex flex-column justify-content-center mt-5">
                <div className="text-center">
                    <h1 className="mb-4">My Skills</h1>
                    <p className="lead">Here are the technologies and tools I’m familiar with:</p>
                </div>

                <div className="d-flex flex-wrap flex-column justify-content-center gap-3 mt-4">
                    <span className="badge bg-primary fs-5 p-2">HTML</span>
                    <span className="badge bg-success fs-5 p-2">CSS</span>
                    <span className="badge bg-warning text-dark fs-5 p-2">JavaScript</span>
                    <span className="badge bg-info text-dark fs-5 p-2">React.js</span>
                    <span className="badge bg-secondary fs-5 p-2">ASP.NET</span>
                    <span className="badge bg-dark fs-5 p-2">SQL</span>
                </div>

            </div>

        </div>
    )
};
export  default skills;
