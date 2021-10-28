import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InsertarDoctor from "../Doctores/InsertarDoctor";
import MostrarDoctores from "../Doctores/MostrarDoctores";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/mostrar" component={MostrarDoctores} />
          <Route exact path="/insertar" component={InsertarDoctor} />
        </Switch>
      </BrowserRouter>
    );
  }
}
