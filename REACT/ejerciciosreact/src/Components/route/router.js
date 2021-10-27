import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import EliminarHospital from '../Hospital/EliminarHospital'
import InsertarHospital from '../Hospital/InsertarHospital'
import MenuHospital from '../Hospital/MenuHospital'
import ModificarHospital from '../Hospital/ModificarHospital'
import MostrarHospital from '../Hospital/MostrarHospital'

export default class router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuHospital />
                <Switch>
                    <Route exact path="/mostrar" component={MostrarHospital} />
                    <Route exact path="/insertar" component={InsertarHospital} />
                    <Route exact path="/modificar/:idhospital" render={props => {
                        var id = props.match.params.idhospital;
                        return <ModificarHospital idhospital={id} />
                    }} />
                    <Route exact path="/eliminar" component={EliminarHospital} />
                </Switch>
            </BrowserRouter>
        )
    }
}
