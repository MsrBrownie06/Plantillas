import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';

export default class EliminarHospital extends Component {

    cajaId = React.createRef();

    state = {
        mensaje: "",
        eliminado: false,
    }

    eliminar = (e) => {
        e.preventDefault();
        var id = this.cajaId.current.value;
        var request = "/webresources/hospitales/delete/" + id;
        var url = Global.urlHospital + request;
        axios.delete(url).then((res) => {
            this.setState({
                eliminado: true,
            })
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Eliminar un Hospital</h1>
                <div className="row justify-content-center">
                    <form onSubmit={this.eliminar} className="col-4 mt-5 p-2 bg-danger rounded fw-bold" style={{ border: "solid darkred 4px", color: "white" }}>
                        <div className="mb-3">
                            <label className="form-label">Id</label>
                            <input className="form-control" type="number" ref={this.cajaId} />
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn" style={{ backgroundColor: "darkred", color: 'white' }} type="submit">Eliminar</button>
                        </div>
                    </form>
                </div>
                {this.state.eliminado === true && <Redirect to="/mostrar" />}
            </div>
        )
    }
}
