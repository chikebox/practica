import { Component, OnInit } from '@angular/core';
import { Casa } from '../models/casa';
import { CasaService } from '../providers/casa.service';
import { Servicio } from '../models/servicio';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  nombre:string;
  precio:number;
  alquiler:boolean;
  habitaciones:number;
  foto:string;
  direccion:string;
  tv:boolean;
  wc:boolean;
  cocina:boolean;
  jardin:boolean;
  constructor(public casaService:CasaService) {
    this.nombre="";
    this.precio=0;
    this.alquiler=false;
    this.habitaciones=0;
    this.foto="";
    this.direccion="";
    this.tv=false;
    this.wc=false;
    this.cocina=false;
    this.jardin=false;
   }

  ngOnInit() {
  }
  new(){
    console.log('TodosComponent new ');
    let casa = new Casa(this.nombre,this.precio,this.alquiler,this.habitaciones,this.foto,this.direccion);
    let servicios:Servicio[]=[];
    let servicio:Servicio;
    servicio=new Servicio("tv",this.tv);
    servicios.push(servicio);
    servicio=new Servicio("wc",this.wc);
    servicios.push(servicio);
    servicio=new Servicio("cocina",this.cocina);
    servicios.push(servicio);
    servicio=new Servicio("jardin",this.jardin);
    servicios.push(servicio);
    casa.servicios=servicios;

    this.casaService.post(casa).subscribe(
      result=>{
        console.log('TodosComponent new %o', result);
      },
      error=>{
        alert('No se pudo Crear Nueva Tarea');
        console.error(error);
      }
    );
  }

}
