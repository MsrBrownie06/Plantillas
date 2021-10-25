import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Collatz from "../Formularios/Collatz";
import EjemploSimple from "../Formularios/EjemploSimple";
import SeleccionMultiple from "../Formularios/SeleccionMultiple";
import TablaMultiplicar from "../Formularios/TablaMultiplicar";
import TablaMultiplicarSelect from "../Formularios/TablaMultiplicarSelect";
import Cine from "../Rutas/Cine/Cine";
import Home from "../Rutas/Home/Home";
import Musica from "../Rutas/Musica/Musica";
import Tv from "../Rutas/Tv/Tv";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cine" component={Cine} />
          <Route path="/musica" component={Musica} />
          <Route path="/tv" component={Tv} />
          <Route path="/formulario" component={EjemploSimple} />
          <Route path="/collatz" component={Collatz} />
          <Route path="/Multiplicacion" component={TablaMultiplicar} />
          <Route path="/Select" component={TablaMultiplicarSelect} />
          <Route path="/SelectMultiple" component={SeleccionMultiple} />
        </Switch>
      </BrowserRouter>
    );
  }
}
