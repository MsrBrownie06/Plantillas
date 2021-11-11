import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos FormsModule para usar formularios
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/Components/primercomponent/primercomponent.component';
import { HooksAngular } from 'src/Components/hooksangular/hooksangular.component';
import { Deportes } from 'src/Components/deportes/deportes.component';
import { FormularioBindingModel } from 'src/Components/formularioBindingModel/formularioBindingModel.component';
import { FormulariosReferencia } from 'src/Components/formulariosreferencia/formulariosreferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    Deportes,
    FormularioBindingModel,
    FormulariosReferencia
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
