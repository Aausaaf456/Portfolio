import 'bootstrap/dist/css/bootstrap.min.css';
function footer1()
{
    return(
        <div className="bg-dark text-white py-4 mt-5">
            <div className="container text-center">
                <h5 className="mb-3">© 2025 Ausaaf Khan | All Rights Reserved</h5>

                <div className="d-flex justify-content-center gap-4">

                    <a href="#about" className="text-white text-decoration-none fs-5">
                        About
                    </a>


                    <a href="#skill" rel="noopener noreferrer" className="text-white text-decoration-none fs-5">
                        Skills
                    </a>


                    <a href="#education"  rel="noopener noreferrer" className="text-white text-decoration-none fs-5">
                        Education
                    </a>
                    <a href="#projects"  rel="noopener noreferrer" className="text-white text-decoration-none fs-5">
                       Projects
                    </a>
                    <a href="#contact"  rel="noopener noreferrer" className="text-white text-decoration-none fs-5">
                        Contact
                    </a>
                </div>
            </div>
        </div>

    )
}
export default footer1;
