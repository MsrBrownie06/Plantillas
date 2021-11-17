import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SerieComponent } from "./Components/serie/serie.component";
import { PersonajeComponent } from "./Components/personaje/personaje.component";
import { NewPersonajeComponent } from "./Components/new-personaje/new-personaje.component";
import { ModificarPersonajeComponent } from "./Components/modificar-personaje/modificar-personaje.component";

//cargaremos los componentes a usar en las rutas


//constante con las rutas
const appRoutes: Routes = [
 {path:"serie/:idSerie", component: SerieComponent},
 {path:"personajes/:idSerie", component: PersonajeComponent},
 {path:"newPersonajes", component: NewPersonajeComponent},
 {path:"modifyPersonajes", component: ModificarPersonajeComponent},
];

//exportaremos dos elementos el cual sera:
//1 - el proovedor de rutas
//2 - un array vacio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders: any[] = [];