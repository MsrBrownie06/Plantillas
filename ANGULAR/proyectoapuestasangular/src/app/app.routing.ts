import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { DetallesquipoComponent } from "./components/detallesquipo/detallesquipo.component";
import { TablajugadoresComponent } from "./components/tablajugadores/tablajugadores.component";
import { DetallesjugadorComponent } from "./components/detallesjugador/detallesjugador.component";
import { ApuestasComponent } from "./components/apuestas/apuestas.component";
import { NuevaapuestaComponent } from "./components/nuevaapuesta/nuevaapuesta.component";
import { BuscarjugadoresComponent } from "./components/buscarjugadores/buscarjugadores.component";

const appRoutes : Routes = [
    {path:"detallequipo/:idEquipo", component : DetallesquipoComponent},
    {path:"tablajugadores/:idEquipo", component : TablajugadoresComponent},
    {path:"detallesjugador/:idJugador", component : DetallesjugadorComponent},
    {path:"apuesta", component : ApuestasComponent},
    {path:"nuevaapuesta", component : NuevaapuestaComponent},
    {path:"buscarjugador/:nombre", component : BuscarjugadoresComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);