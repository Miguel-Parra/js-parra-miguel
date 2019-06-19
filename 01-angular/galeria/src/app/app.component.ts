import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';

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
      titulo:"Don Jose"
    },
    {
      nombre:"Carnitas",
      description:"Gorditas",
      titulo:"Don Pepito"

    },
    {
      nombre:"Chicas",
      description:"Cheveres",
      titulo:"Doña Maria"

    }
  ]
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
