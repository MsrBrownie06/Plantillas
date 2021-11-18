import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos las rutas y el provider que hemos creado en app.routing.ts
//importamos FormModules para poder usar los formularios
//importamos HttpClientModule para poder usar Apis en el proyecto
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { DepartamentosComponent } from './Components/departamentos/departamentos.component';
import { DepartamentoService } from './Services/departamentos.service';
import { HomeComponent } from './Components/home/home.component';
import { InsertarDepartamentoComponent } from './Components/insertar-departamento/insertar-departamento.component';
import { ModificarDepartamentoComponent } from './Components/modificar-departamento/modificar-departamento.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { EmpleadoService } from './Services/empleados.service';
import { IncrementarSalarioComponent } from './Components/incrementar-salario/incrementar-salario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DepartamentosComponent,
    HomeComponent,
    InsertarDepartamentoComponent,
    ModificarDepartamentoComponent,
    EmpleadosComponent,
    IncrementarSalarioComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProviders,DepartamentoService,EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
