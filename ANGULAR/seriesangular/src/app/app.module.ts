import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { SerieComponent } from './Components/serie/serie.component';
import { ModificarPersonajeComponent } from './Components/modificar-personaje/modificar-personaje.component';
import { NewPersonajeComponent } from './Components/new-personaje/new-personaje.component';
import { PersonajeComponent } from './Components/personaje/personaje.component';
import { SeriesService } from './Services/series.service';
import { PersonajeService } from './Services/personaje.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SerieComponent,
    ModificarPersonajeComponent,
    NewPersonajeComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule
  ],
  providers: [appRoutingProviders, SeriesService, PersonajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
