//importamos los modulos de rutas de ANgular que usaremos
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//cargaremos los componentes a usar en las rutas
import { HomeComponent } from "./Components/home/home.component";
import { DepartamentosComponent } from "./Components/departamentos/departamentos.component";

//constante con las rutas
const appRoutes: Routes = [
 {path:"", component: HomeComponent},
 {path:"departamento", component: DepartamentosComponent}
];

//exportaremos dos elementos el cual sera:
//1 - el proovedor de rutas
//2 - un array vacio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders: any[] = [];