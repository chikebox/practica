import { Component, OnInit } from '@angular/core';
import { TareaService } from '../providers/tarea.service';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  id:number;
  tareas:Tarea[];
  constructor(private tareaService:TareaService) {
    this.id=0;
    this.tareas=[];
   }

  ngOnInit() {
  }
  buscarTarea(){
    console.log('TodosComponent cargarTareas');
    this.tareas = [];
    this.tareaService.getId(this.id).subscribe(
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

    let tarea:Tarea;
    tarea = new Tarea( result.title );
    tarea.id = result.id;
    tarea.idUser = result.userId;
    tarea.completed = result.completed;

    this.tareas.push(tarea);

  }
}
