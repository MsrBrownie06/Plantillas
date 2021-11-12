import { routing, appRoutingProviders } from './app.routing';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CineComponent } from './Components/cine/cine.component';
import { TelevisionComponent } from './Components/television/television.component';
import { MusicaComponent } from './Components/musica/musica.component';
import { MenuComponent } from './Components/menu/menu.component';
import { Error404Component } from './Components/error404/error404.component';
import { NumeroDobleComponent } from './Components/numero-doble/numero-doble.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CineComponent,
    TelevisionComponent,
    MusicaComponent,
    MenuComponent,
    Error404Component,
    NumeroDobleComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
