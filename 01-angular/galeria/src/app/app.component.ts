import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { CarritoService } from './Servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  claseTitulo= 'rojo';
  estaMostrando='falso';

  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres")
  ];


  arregloFloresJs =[
    {
      nombre:"Papitas",
      description:"A lo bestia",
      titulo:"Don Jose",
      notas: [
        'Papitas',
        'Empanadas',
      ]
    },
    {
      nombre:"Carnitas",
      description:"Gorditas",
      titulo:"Don Pepito",
      notas: [
        'Motes',
        'fritadas',
      ]

    },
    {
      nombre:"Chicas",
      description:"Cheveres",
      titulo:"Doña Maria",
      notas: [
        'Encebollados',
        'Ceviches',
      ]

    }
  ]

  constructor(private readonly _carritoService: CarritoService) { }

  
  cambioChela(evento:boolean){
    //logica para hacerle verde
    console.log("llego a chela", evento)
    this.claseTitulo = 'verde'
  }

  cambioCerveza(evento:boolean){
//logica para hacerle amarillo

console.log("llego a cerveza", evento)
this.claseTitulo = 'amarillo'
}

mostrar(estaMostrando){
  this.estaMostrando=estaMostrando;
}

}





class Flor{
  constructor(
   public  nombre:string, //yo voy a tener una variable en la clase
   //y que sea publica y se llame nombre y que se llame
   //construrctor.
    public descripcion:string
  ){

  }
}
