import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos las rutas y el provider que hemos creado en app.routing.ts
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './Components/libreria/libreria.component';
import { ComicComponent } from './Components/comic/comic.component';
import { MenuComponent } from './Components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    MenuComponent
  ],
  //colocamos el 'routing' en IMPORTS
  imports: [
    BrowserModule, routing
  ],
  //colocamos el 'appRoutingProviders' en PROVIDERS
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
