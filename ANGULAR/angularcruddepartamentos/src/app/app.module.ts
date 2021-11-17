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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DepartamentosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProviders,DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
