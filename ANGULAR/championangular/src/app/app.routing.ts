//importamos los modulos de rutas de ANgular que usaremos
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//cargaremos los componentes a usar en las rutas
import { EquipoComponent } from "./Components/equipo/equipo.component";
import { ApuestasComponent } from "./Components/apuestas/apuestas.component";
import { JugadoresComponent } from "./Components/jugadores/jugadores.component";
import { JugadorComponent } from "./Components/jugador/jugador.component";
import { NewApuestaComponent } from "./Components/new-apuesta/new-apuesta.component";
import { NewJugadorComponent } from "./Components/new-jugador/new-jugador.component";
import { NewEquipoComponent } from "./Components/new-equipo/new-equipo.component";


//constante con las rutas
const appRoutes: Routes = [
    {path: "equipo/:idEquipo", component: EquipoComponent},
    {path: "jugadores/:idEquipo", component: JugadoresComponent},
    {path: "jugador/:idJugador", component: JugadorComponent},
    {path: "apuestas", component: ApuestasComponent},
    {path: "newApuesta", component: NewApuestaComponent},
    {path: "newJugador", component: NewJugadorComponent},
    {path: "newEquipo", component: NewEquipoComponent}, 
    
];

//exportaremos dos elementos el cual sera:
//1 - el proovedor de rutas
//2 - un array vacio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders: any[] = [];