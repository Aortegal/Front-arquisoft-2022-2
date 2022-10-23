import React from "react";

function EnrollmentProcess () {
    return (
        <>
            <div className="titles-container">
                <h5>Enrollment Process</h5>
            </div>
            <div className="container-section">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">Enrollment citation</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Your next registration appointment is at: </h6><br />
                        <h6 className="text-italic">fecha hora</h6>
                        <br /><br />
                        <button type="button" className="btn boton-gris">
                            Go&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
  );
}

export default EnrollmentProcess;