import 'bootstrap/dist/css/bootstrap.min.css';
import Github from './image/github.jpg'
import Portfolio from './image/portfolio.png';
import Ben from './image/ben.png'
import React from "react";
function projects()
{
    const size={
        height: '200px',
        width: '400px'
    }
    return(
        <div className="container my-5 min-vh-100">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Projects</h1>
            </div>

            <div className="row justify-content-center g-5">

                <div className="col-md-5 d-flex flex-column align-items-center" style={size}>
                    <div className="card shadow w-100">
                        <img src={Portfolio} alt="portfolio" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5 className="card-title fs-4">Portfolio</h5>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <a href="#">
                                    <img src={Github} alt="github" className="rounded-circle shadow" style={{ width: '50px', height: '50px' }} />
                                </a>
                                <a href="http://localhost:3000" className="btn btn-outline-primary px-4 py-2">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-5 d-flex flex-column align-items-center" style={size}>
                    <div className="card shadow w-100">
                        <img src={Ben} alt="portfolio" className="card-img-top" />
                        <div className="card-body text-center">
                            <h5 className="card-title fs-4">Ben10</h5>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <a href="https://github.com/Aausaaf456/Ben10">
                                    <img src={Github} alt="github" className="rounded-circle shadow" style={{ width: '50px', height: '50px' }} />
                                </a>
                                <a href="https://localhost:44322/Ben" className="btn btn-outline-primary px-4 py-2">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


};
export default  projects;