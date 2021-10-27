import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetallesDepartamento from "../Departamentos/DetallesDepartamento";
import EliminarDepartamento from "../Departamentos/EliminarDepartamento";
import InsertarDepartamento from "../Departamentos/InsertarDepartamento";
import MenuDepartamentos from "../Departamentos/MenuDepartamentos";
import TablaDepartamentos from "../Departamentos/TablaDepartamentos";
import UpdateDepartamento from "../Departamentos/UpdateDepartamento";
import DetalleEmpleadoRouter from "../RutasEmpleadosParametros/DetalleEmpleadoRouter";
//import EmpleadosRouter from "../RutasEmpleadosParametros/EmpleadosRouter";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Switch>
          <Route exact path="/createDept" component={InsertarDepartamento} />
          <Route exact path="/Departamentos" component={TablaDepartamentos} />
          <Route
            exact
            path="/detallesDepartamentos/:numero/:nombre/:localidad"
            render={(props) => {
              var num = props.match.params.numero;
              var nom = props.match.params.nombre;
              var loc = props.match.params.localidad;
              return (
                <DetallesDepartamento
                  idDept={num}
                  nomDept={nom}
                  locDept={loc}
                />
              );
            }}
          />

          <Route
            exact
            path="/updateDepartamentos/:id"
            render={(props) => {
              var idDept = props.match.params.id;
              return <UpdateDepartamento idDept={idDept} />;
            }}
          />

          <Route
            exact
            path="/deleteDept/:numero/:nombre/:localidad"
            render={(props) => {
              var num = props.match.params.numero;
              var nom = props.match.params.nombre;
              var loc = props.match.params.localidad;
              return (
                <EliminarDepartamento
                  idDept={num}
                  nombre={nom}
                  localidad={loc}
                />
              );
            }}
          />

          <Route
            exact
            path="/detallesempleado/:idempleado"
            render={(props) => {
              var id = props.match.params.idempleado;
              return <DetalleEmpleadoRouter idempleado={id} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
