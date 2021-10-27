import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';

export default class InsertarHospital extends Component {

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    state = {
        mensaje: "",
        confirmar: false,
    }

    insertar = (e) => {
        e.preventDefault();

        var id = this.cajaId.current.value;
        var nom = this.cajaNombre.current.value;
        var dir = this.cajaDireccion.current.value;
        var tel = this.cajaTelefono.current.value;
        var cam = this.cajaCamas.current.value;

        var HospitalNuevo = {
            idhospital: parseInt(id),
            nombre: nom,
            direccion: dir,
            telefono: tel,
            camas: parseInt(cam),
        }

        var request = "/webresources/hospitales/post"
        var url = Global.urlHospital + request;
        axios.post(url, HospitalNuevo).then((res) => {
            this.setState({
                confirmar: true,
            })
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Insertar un Hospital</h1>
                <div className="row justify-content-center">
                    <form onSubmit={this.insertar} className="col-4 mt-5 p-2 bg-success rounded fw-bold" style={{ border: "solid darkgreen 4px", color: "white" }}>
                        <div className="mb-3">
                            <label className="form-label">Id: </label>
                            <input type="number" className="form-control" placeholder="introduzca el id" ref={this.cajaId} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre: </label>
                            <input type="text" className="form-control" placeholder="introduzca el nombre" ref={this.cajaNombre} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Direccion: </label>
                            <input type="text" className="form-control" placeholder="introduzca la direccion" ref={this.cajaDireccion} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono: </label>
                            <input type="text" className="form-control" placeholder="introduzca el telefono" ref={this.cajaTelefono} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Camas: </label>
                            <input type="number" className="form-control" placeholder="introduzca las camas" ref={this.cajaCamas} />
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn" style={{ backgroundColor: "darkgreen", color: 'white' }} type="submit">Insertar</button>
                        </div>
                    </form>
                </div>
                {this.state.confirmar === true && <Redirect to="/mostrar" />}
            </div>
        )
    }
}
