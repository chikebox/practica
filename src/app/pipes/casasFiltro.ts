import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../models/casa';
@Pipe({
  name: 'filter'
})
export class CasasFilterPipe implements PipeTransform {

  /**
   * 
   * @param recetas Array de recetas
   * @param searchText Texto de busqueda
   */
  transform(casas: Casa[], searchText: string,alquiler:boolean, venta: boolean, minimo:number, maximo:number): Casa[] {

    //si no hay recetas retornar vacio
    if (!casas) return [];

    let casasFilterArray: Casa[] = [];

    //Filtramos si llevan gluten o no
    if (venta&&!alquiler) {
      casas.forEach(it => {
        if (!it.alquiler) {
          casasFilterArray.push(it);
        }
      });
    } 
    else if(alquiler&&!venta){
        casas.forEach(it => {
            if (it.alquiler) {
              casasFilterArray.push(it);
            }
          });
    }
    else{
        casasFilterArray = casas;
    }
    
    //De los que quedan filtramos por precio si hay
    if(minimo!=0){
        let precio=0;
        casasFilterArray=casasFilterArray.filter(it =>{
            precio=it.precio
            return precio>minimo;
        });
    }
    if(maximo!=0){
        let precio=0;
        casasFilterArray=casasFilterArray.filter(it =>{
            precio=it.precio
            return precio<maximo;
        });
    }

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return casasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let casa = '';
      return casasFilterArray.filter(it => {


        casa = it.nombre + it.direccion;
        casa = casa.toLowerCase();

        return casa.includes(searchText);
      });
    }


  }
}