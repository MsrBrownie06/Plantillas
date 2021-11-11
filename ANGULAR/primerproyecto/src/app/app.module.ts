import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/Components/primercomponent/primercomponent.component';
import { HooksAngular } from 'src/Components/hooksangular/hooksangular.component';
import { Deportes } from 'src/Components/deportes/deportes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    Deportes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
