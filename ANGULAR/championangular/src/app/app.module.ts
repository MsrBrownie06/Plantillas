import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ApuestasComponent } from './Components/apuestas/apuestas.component';
import { EquipoComponent } from './Components/equipo/equipo.component';
import { MenuComponent } from './Components/menu/menu.component';
import { NewApuestaComponent } from './Components/new-apuesta/new-apuesta.component';
import { JugadoresComponent } from './Components/jugadores/jugadores.component';
import { JugadorComponent } from './Components/jugador/jugador.component';
import { ChampiosService } from './Services/champions.service';
import { NewJugadorComponent } from './Components/new-jugador/new-jugador.component';
import { NewEquipoComponent } from './Components/new-equipo/new-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    ApuestasComponent,
    EquipoComponent,
    MenuComponent,
    NewApuestaComponent,
    JugadoresComponent,
    JugadorComponent,
    NewJugadorComponent,
    NewEquipoComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [appRoutingProviders,ChampiosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
