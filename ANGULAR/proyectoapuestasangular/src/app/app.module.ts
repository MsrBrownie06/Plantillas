import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceApuestas } from './services/apuestas.service';
import { DetallesquipoComponent } from './components/detallesquipo/detallesquipo.component';
import { TablajugadoresComponent } from './components/tablajugadores/tablajugadores.component';
import { DetallesjugadorComponent } from './components/detallesjugador/detallesjugador.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { NuevaapuestaComponent } from './components/nuevaapuesta/nuevaapuesta.component';
import { BuscarjugadoresComponent } from './components/buscarjugadores/buscarjugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetallesquipoComponent,
    TablajugadoresComponent,
    DetallesjugadorComponent,
    ApuestasComponent,
    NuevaapuestaComponent,
    BuscarjugadoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, ServiceApuestas],
  bootstrap: [AppComponent]
})
export class AppModule { }
