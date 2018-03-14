import { Component, OnInit } from '@angular/core';
import { Casa } from '../models/casa';
import { CasaService } from '../providers/casa.service';
import { Servicio } from '../models/servicio';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.scss']
})
export class AlquilerComponent implements OnInit {
  casas:Casa[];
  casaSeleccionada:Casa;
  minimo:number;
  maximo:number;


  constructor(public casaService: CasaService) {
    console.log("constructor AlquilerComponent");
    this.casas=[];
    this.casaSeleccionada= new Casa("",0,false,0,"","");
    this.minimo=0;
    this.maximo=0;
   }

  ngOnInit() {
    console.log("ngOnInit AlquilerComponent");
    this.cargarCasas();
  }
  cargarCasas(){
    console.log('TodosComponent cargarCasas');
    this.casas = [];
    this.casaService.getTodas().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapear(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

  /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapear( result : any ){

    let casa:Casa;
    let servicios:Servicio[];
    let servicio: Servicio;
    result.forEach(el => {
        casa = new Casa( el.nombre, el.precio, el.alquiler, el.habitaciones, el.foto, el.direccion);
        servicios=[];
        el.servicios.forEach(service =>{
          servicio=new Servicio(service.nombre, service.disponible)
          servicios.push(servicio);
        })
        //fin el.servicios.foreach
        casa.servicios=servicios;
        console.log(casa.servicios);
        this.casas.push(casa);
    });
    //fin result.foreach
    this.casaSeleccionada=this.casas[0];

  }
  seleccionarCasa(event, casa:Casa){
    console.log("seleccionarCasa %o", event.receta);
    this.casaSeleccionada=casa;
    console.log("Casa %o",this.casaSeleccionada);  
  }
}
