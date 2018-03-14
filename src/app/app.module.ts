import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { UnoComponent } from './uno/uno.component';
import { TareaService } from './providers/tarea.service';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { CasaService } from './providers/casa.service';
import { CasasFilterPipe } from './pipes/casasFiltro';
import { CrudComponent } from './crud/crud.component';
import { AppRouter } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    FormularioBasicoComponent,
    AlquilerComponent,
    CasasFilterPipe,
    CrudComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouter,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    HttpClientModule,
    TareaService,
    CasaService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
