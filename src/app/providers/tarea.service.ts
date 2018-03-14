import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT="http://192.168.0.42:3000/Todos";
@Injectable()
export class TareaService {

  constructor( public http: HttpClient ) {
    console.log('TodosService constructor');
   }
   getId(id:number):Observable<any>{
     let url=END_POINT+"/"+id;
     return this.http.get(url);
   }


}
