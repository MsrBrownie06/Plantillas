import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Apuestas from "../Apuestas/Apuestas";
import NuevaApuesta from "../Apuestas/NuevaApuesta";
import Equipo from "../Equipos/Equipo";
import Home from "../Equipos/Home";
import Menu from "../Equipos/Menu";
import Jugador from "../Jugadores/Jugador";
import Jugadores from "../Jugadores/Jugadores";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apuestas" component={Apuestas} />
          <Route exact path="/nuevaApuesta" component={NuevaApuesta} />
          <Route
            exact
            path="/equipo/:idEquipo"
            render={(props) => {
              var id = props.match.params.idEquipo;
              return <Equipo id={id} />;
            }}
          />
          <Route
            exact
            path="/jugadores/:idEquipo"
            render={(props) => {
              var id = props.match.params.idEquipo;
              return <Jugadores idEquipo={id} />;
            }}
          />
          <Route
            exact
            path="/jugador/:idEquipo/:nombre"
            render={(props) => {
              var nom = props.match.params.nombre;
              var equipo = props.match.params.idEquipo;
              return <Jugador nombre={nom} idEquipo={equipo} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
