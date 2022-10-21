import React from "react";
import { Link } from "react-router-dom";
import PersonalInformation from "./personalInformation";
import AcademicInformation from "./academicInformation";
import EnrollmentProcess from "./enrollmentProcess";
import FinancialInformation from "./financialInformation";
import "./pages.css";

function PrincipalContainer () {
    return (
        <>
            <div class="row container-principal">
                <div class="col-sm-4">
                    <div className="nav flex-column nav-pills ppal-container" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link boton-verde-rec active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <i class="fa-solid fa-circle-info"></i>&nbsp;&nbsp;&nbsp;Personal Information
                        </button>
                        <button className="nav-link boton-verde-rec" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <i class="fa-solid fa-user-graduate"></i>&nbsp;&nbsp;&nbsp;Academic Information
                        </button>
                        <button className="nav-link boton-verde-rec" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <i class="fa-solid fa-file-signature"></i>&nbsp;&nbsp;&nbsp;Enrollment Process</button>
                        <button className="nav-link boton-verde-rec" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <i class="fa-solid fa-coins"></i>&nbsp;&nbsp;&nbsp;Financial Information</button>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <PersonalInformation />
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <AcademicInformation />
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <EnrollmentProcess />
                        </div>
                        <div className="tab-pane fadel" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            <FinancialInformation />
                        </div>
                    </div>
                </div>
            </div>
        </>
);
}

export default PrincipalContainer;
