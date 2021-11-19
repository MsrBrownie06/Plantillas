//importamos los modulos de rutas de ANgular que usaremos
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//cargaremos los componentes a usar en las rutas
import { PeliculaComponent } from "./Components/pelicula/pelicula.component";
import { BuscadorComponent } from "./Components/buscador/buscador.component";

//constante con las rutas
const appRoutes: Routes = [
    {path:"peliculasNacionalidad/:nacionalidad", component: PeliculaComponent},
    {path:"peliculasGenero/:genero", component: PeliculaComponent},
    {path:"buscador/:parametros", component: BuscadorComponent},
];

//exportaremos dos elementos el cual sera:
//1 - el proovedor de rutas
//2 - un array vacio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders: any[] = [];