import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ModificarPersonaje from "../Personajes/ModificarPersonaje";
import NewPersonaje from "../Personajes/NewPersonaje";
import Personajes from "../Personajes/Personajes";
import Menu from "../Series/Menu";
import Serie from "../Series/Serie";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/newPersonaje" component={NewPersonaje} />
          <Route exact path="/modificar" component={ModificarPersonaje} />
          <Route
            exact
            path={"/serie/:idSerie"}
            render={(props) => {
              var id = props.match.params.idSerie;
              return <Serie idSerie={id} />;
            }}
          />
          <Route
            exact
            path={"/personajes/:idSerie"}
            render={(props) => {
              var id = props.match.params.idSerie;
              return <Personajes idSerie={id} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
