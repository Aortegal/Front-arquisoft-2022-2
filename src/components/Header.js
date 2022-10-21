import React from "react";
import { FormikFormStudents } from "./signStudents";

function Header () {
    return (
        <>
            <div className="modal fade" id="modal1" tabindex="1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header App">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormikFormStudents />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modal2" tabindex="1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header App">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Sign</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormikFormStudents />
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar sticky-top color Navbar">
                <a className="navbar-brand" href="#">
                <img className="d-inline-block align-top App-logo" src="/images/logo.png" alt="hola" />
                <h2 className="texto-logo" style={{ color: "#2f2f2f" }}>Campus <br /> Kid</h2>
                </a>
                <div className="btn-group nav-boton boton-menu-grupo" role="group" aria-label="Basic example">
                    <button type="button" className="btn boton-menu-i" data-toggle="modal" data-target="#modal1">
                        <i className="fa fa-phone fa-2x"></i>
                    </button>

                    <button type="button" className="btn boton-menu-d" data-toggle="modal" data-target="#modal2">
                        <i className="fa fa-user fa-2x"></i>

                    </button>
                </div>
            </nav>

        </>
    )
}

export default Header;