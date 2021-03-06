//importamos los modulos de rutas de ANgular que usaremos
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//cargaremos los componentes a usar en las rutas
import { HomeComponent } from "./Components/home/home.component";
import { DepartamentosComponent } from "./Components/departamentos/departamentos.component";
import { InsertarDepartamentoComponent } from "./Components/insertar-departamento/insertar-departamento.component";
import { ModificarDepartamentoComponent } from "./Components/modificar-departamento/modificar-departamento.component";
import { EmpleadosComponent } from "./Components/empleados/empleados.component";
import { IncrementarSalarioComponent } from "./Components/incrementar-salario/incrementar-salario.component";

//constante con las rutas
const appRoutes: Routes = [
 {path:"", component: HomeComponent},
 {path:"departamento", component: DepartamentosComponent},
 {path:"eliminar/:idDept", component: DepartamentosComponent},
 {path:"empleado/:idEmpleado", component: IncrementarSalarioComponent},
 {path:"empleados/:idDept", component: EmpleadosComponent},
 {path:"insertar", component: InsertarDepartamentoComponent},
 {path:"modificar/:numero/:nombre/:localidad", component: ModificarDepartamentoComponent},
];

//exportaremos dos elementos el cual sera:
//1 - el proovedor de rutas
//2 - un array vacio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders: any[] = [];