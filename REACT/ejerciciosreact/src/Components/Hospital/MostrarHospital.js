import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class MostrarHospital extends Component {

    state = {
        Hospitales: [],
        status: false,
    }

    cargarHospitales = () => {
        var request = "/webresources/hospitales";
        var url = Global.urlHospital + request;
        axios.get(url).then(res => {
            this.setState({
                Hospitales: res.data,
                status: true,
            });
        });

    }

    componentDidMount() {
        this.cargarHospitales();
    }

    render() {
        if (this.state.status === true) {
            return (
                <div>
                    <h1 className="text-center">Mostrar Todos los Hospitales</h1>
                    <table className="table table-striped table-hover text-center">
                        <thead className="text-white fw-bold" style={{ backgroundColor: "purple" }}>
                            <tr>
                                <td>NOMBRE</td>
                                <td>DIRECCION</td>
                                <td>TELEFONO</td>
                                <td>CAMAS</td>
                                <td>ACCION</td>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.Hospitales.map((hospital, index) => {
                                return <tr key={index}>
                                    <td>{hospital.nombre}</td>
                                    <td>{hospital.direccion}</td>
                                    <td>{hospital.telefono}</td>
                                    <td>{hospital.camas}</td>
                                    <td><a href={"/modificar/" + hospital.idhospital}>Detalles</a></td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (<h1>Cargando Hospitales...</h1>)
        }
    }
}
