import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';
import { DetallesPeliculaComponent } from './Components/detalles-pelicula/detalles-pelicula.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { PeliculaService } from './Services/pelicula.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PeliculaComponent,
    DetallesPeliculaComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [appRoutingProviders,PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
