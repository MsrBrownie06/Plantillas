import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos las rutas y el provider que hemos creado en app.routing.ts
import { routing, appRoutingProviders } from './app.routing';

//importamos FormModules para poder usar los formularios
import { FormsModule } from '@angular/forms';


//importamos HttpClientModule para poder usar Apis en el proyecto
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LibreriaComponent } from './Components/libreria/libreria.component';
import { ComicComponent } from './Components/comic/comic.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ComicsinyeccionComponent } from './Components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './Services/comics.service';
import { PersonasApiComponent } from './Components/personas-api/personas-api.component';
import { PersonasService } from './Services/personas.service';
import { EmpleadosService } from './Services/empleados.service';
import { EmpleadosSalarioComponent } from './Components/empleados-salario/empleados-salario.component';
import { EmpleadosOficioComponent } from './Components/empleados-oficio/empleados-oficio.component';
import { EmpleadoOficioService } from './Services/empleadoOficio.service';
import { ListadoEmpleadosComponent } from './Components/listado-empleados/listado-empleados.component';
import { DetallesEmpleadoComponent } from './Components/detalles-empleado/detalles-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    MenuComponent,
    ComicsinyeccionComponent,
    PersonasApiComponent,
    EmpleadosSalarioComponent,
    EmpleadosOficioComponent,
    ListadoEmpleadosComponent,
    DetallesEmpleadoComponent
  ],
  //colocamos el 'routing' en IMPORTS
  //colocamos el 'FormModule' en IMPORTS
  //colocamos el 'HttpClientModule' en IMPORTS
  imports: [
    HttpClientModule,

    BrowserModule, routing, FormsModule
  ],
  //colocamos el 'appRoutingProviders' en PROVIDERS
  //aqui colocaremos tambien los servicios que hayamos creado para usarlos en cualquier componente
  providers: [appRoutingProviders, ComicsService, PersonasService, EmpleadosService, EmpleadoOficioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
