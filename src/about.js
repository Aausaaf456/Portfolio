import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './image/ausaaf2.png';
import GitHub from './image/github.jpg';
import Linkedin from './image/linkein.png';
function about()
{
    const background={
        backgroundColor: 'grey'

    }
    const background2={
        backgroundColor: 'black',

    }
    const height1={
        height: '300px'
    }
    return(
        <div className="container-fluid bg-light py-5 min-vh-100 " id="about" style={height1}>
            <div className="row align-items-center justify-content-center">

                <div className="col-md-4 text-center mb-4 mb-md-0 min-vh-100">
                    <div className="card shadow border-0 p-3" style={background}>
                        <img
                            src={Profile}
                            alt="Profile"
                            className="card-img-top rounded-circle mx-auto"
                            style={{ width: "250px", height: "250px", objectFit: "cover" }}
                        />
                    </div>
                </div>


                <div className="col-md-6 min-vh-100 d-flex flex-column">
                    <div className="p-4  rounded text-white shadow" style={background2}>
                        <h2>Hello, I am Ausaaf Khan 👋</h2>
                        <p className="mt-3">
                            Hello, I am Ausaaf Khan 👋
                            I’m a passionate fresher frontend developer actively looking for opportunities.
                            I have a strong interest in ReactJS, Bootstrap, HTML, CSS, and ASP.NET.
                            I enjoy building responsive and user-friendly web applications.
                            I love turning creative ideas into real-world projects with clean UI and efficient code.
                        </p>
                    </div>
                     <div className="d-flex my-5">
                         <a href="https://github.com/Aausaaf456"><img src={GitHub} alt="gitHub" className="card-img rounded-circle w-50 h-75 bg-danger"/> </a>
                         <a href="https://www.linkedin.com/in/ausaaf-khan-40a188229"><img src={Linkedin} alt="linkedin" className="card-img rounded-circle w-50 h-75"/> </a>
                     </div>
                </div>
            </div>
        </div>
    )
};
export default about;