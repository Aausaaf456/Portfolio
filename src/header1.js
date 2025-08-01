import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function header1() {
    return (
        <div className="container-fluid bg-danger py-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="text-center">
                    <h1 className="text-dark">Portfolio</h1>
                </div>

                <div className="d-flex gap-3">

                    <a href="#about" className="nav-link text-white">About</a>
                    <a href="#skills" className="nav-link text-white">Skills</a>
                    <a href="#education" className="nav-link text-white">Education</a>
                    <a href="#projects" className="nav-link text-white">Projects</a>
                    <a href="#contact" className="nav-link text-white">Contact</a>
                </div>

            </div>
        </div>
    )
};
export default header1;


