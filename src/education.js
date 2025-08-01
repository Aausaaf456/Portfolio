import 'bootstrap/dist/css/bootstrap.min.css' ;
import React from "react";
function education()
{
return(
    <div className="container justify-content-center my-5 min-vh-100 align-items-center gap-4">

        <div className="d-flex justify-content-center flex-wrap flex-column mt-5">
             <div  className="mt-5 justify-content-center align-items-center text-center">
                  <h1 className="mb-4 align-items-center">My Education</h1>
             </div>
            <div className="mt-5 d-flex justify-content-between flex-column gap-3">
                <span className="badge bg-primary fs-5 p-2">Master of Computer Application(MCA) Passed with 54.79%
North Maharashtra University, Jalgaon.    </span>
                <span className="badge bg-success fs-5 p-2">Bachelor of Computer Application(BCA) Passed with 80.93%
North Maharashtra University, Jalgaon</span>
                <span className="badge bg-warning text-dark fs-5 p-2">Higher Secondary Education (H.S.C.) Passed with 51%
Board Of Nashik.</span>
            </div>
        </div>
    </div>
)
}
export default education;