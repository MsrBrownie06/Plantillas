import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08"
                        aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link active" href="#">Link</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="desplegable" data-bs-toggle="dropdown"
                                    aria-expanded="false">Desplegable</span>
                                <ul className="dropdown-menu" aria-labelledby="desplegable">
                                    <li><span className="dropdown-item" href="#">Action</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
