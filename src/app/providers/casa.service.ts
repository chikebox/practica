import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Casa } from '../models/casa';

const END_POINT="http://localhost:3000/casas";
@Injectable()
export class CasaService {

  constructor( public http: HttpClient ) {
    console.log('TodosService constructor');
   }
   getTodas():Observable<any>{
    let url=END_POINT;
    console.log('CasaService getTodas ${url}');
    return this.http.get(url);
  }
  post(casa:Casa):Observable<any>{
    let url = END_POINT;
    console.log(`TodosService put ${url}`);

    let body = {
                  // "id": todo.id,
                  "nombre": casa.nombre,
                  "precio": casa.precio,
                  "alquiler": casa.alquiler,
                  "habitaciones": casa.habitaciones,
                  "foto": casa.foto,
                  "direccion": casa.direccion,
                  "servicios": [
                  { "nombre": casa.servicios[0].nombre,"disponible": casa.servicios[0].tiene },
                  { "nombre": casa.servicios[1].nombre,"disponible": casa.servicios[1].tiene },
                  { "nombre": casa.servicios[2].nombre,"disponible": casa.servicios[2].tiene },
                  { "nombre": casa.servicios[3].nombre,"disponible": casa.servicios[3].tiene }      
                  ]     
                }
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }

}
