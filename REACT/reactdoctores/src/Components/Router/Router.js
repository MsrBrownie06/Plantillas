import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InsertarDoctor from "../Doctores/InsertarDoctor";
import MostrarDoctores from "../Doctores/MostrarDoctores";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route to="/mostrar" component={MostrarDoctores} />
          <Route to="/insertar" component={InsertarDoctor} />
        </Switch>
      </BrowserRouter>
    );
  }
}
