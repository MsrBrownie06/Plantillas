import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
//import $ from "jquery";
//import Popper from 'popper.js'
import { Link } from 'react-router-dom';

export default class MenuHospital extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/mostrar">Mostrar Hospitales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/insertar">Insertar Hospitales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/modificar">Modificar Hospitales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/eliminar">Eliminar Hospitales</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
