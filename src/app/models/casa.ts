import { Servicio } from "./servicio";

export class Casa{
    nombre:string;
    precio:number;
    alquiler:boolean;
    habitaciones:number;
    foto:string;
    direccion:string;
    servicios: any[];
    constructor(nombre:string,precio:number,alquiler:boolean,habitaciones:number,foto:string,direccion:string){
        this.nombre=nombre;
        this.precio=precio;
        this.alquiler=alquiler;
        this.habitaciones=habitaciones;
        this.foto=foto;
        this.direccion=direccion;
        this.servicios=[];
    }
}