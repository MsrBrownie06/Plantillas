//importamos los modulos de rutas de ANgular que usaremos
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//cargaremos los componentes a usar en las rutas
import { LibreriaComponent } from "./Components/libreria/libreria.component";
import { ComicsinyeccionComponent } from "./Components/comicsinyeccion/comicsinyeccion.component";
import { PersonasApiComponent } from "./Components/personas-api/personas-api.component";
import { EmpleadosSalarioComponent } from "./Components/empleados-salario/empleados-salario.component";
import { EmpleadosOficioComponent } from "./Components/empleados-oficio/empleados-oficio.component";

//constante con las rutas
const appRoutes: Routes = [
    {path: "libreriaComics", component: LibreriaComponent},
    {path: "libreriaService", component: ComicsinyeccionComponent},
    {path: "personasApi", component: PersonasApiComponent},
    {path: "empleadosSalario", component: EmpleadosSalarioComponent},
    {path: "empleadosOficio", component: EmpleadosOficioComponent},
];

//exportaremos dos elementos el cual sera:
//1 - el proovedor de rutas
//2 - un array vacio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders: any[] = [];