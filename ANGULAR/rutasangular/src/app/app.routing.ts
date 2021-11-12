import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//necesitamos importar los componentes con los que vayamos a navegar
import { HomeComponent } from "./Components/home/home.component";
import { MusicaComponent } from "./Components/musica/musica.component";
import { CineComponent } from "./Components/cine/cine.component";
import { TelevisionComponent } from "./Components/television/television.component";
import { Error404Component } from "./Components/error404/error404.component";
import { NumeroDobleComponent } from "./Components/numero-doble/numero-doble.component";

//Ahora defeniremos el array de rutas para la navegacion, el cual es de tipo routes

//en path la barra ya esta implicita, es decir, no hay que ponerla 
//las rutas deben ir en orden, ya que sino dejara de hacer caso y podria no funcionar
const appRoutes : Routes = [
    {path: "",component: HomeComponent}, 
    {path:"home", component: HomeComponent}, 
    {path:"musica", component:MusicaComponent}, 
    {path:"cine", component:CineComponent},
    {path:"television", component:TelevisionComponent},
    {path:"numeroDoble", component:NumeroDobleComponent},
    {path:"numeroDoble/:numero", component:NumeroDobleComponent},
    {path:"**", component:Error404Component},
];

//de esta clase se exportaran dos elementos, uno de ellos es el proveedor de rutas, que es un array vacio

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);