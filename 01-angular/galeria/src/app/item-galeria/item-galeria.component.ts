import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../Servicios/carrito/carrito.service';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit, OnDestroy {
 
  title='Licoreria';

  @Input()
  nombreItem;

  @Input()
  textoBoton;

  @Input()
  titulo;
  
  //eventos para hijo a papa
  @Output()
  cambioChela: EventEmitter<boolean> = new EventEmitter

  @Output()
  cambioCerveza: EventEmitter<boolean> = new EventEmitter


  url="https://http2.mlstatic.com/biela-repuestos-mercedes-benzom-166-D_NQ_NP_642014-MLU26705950558_012018-Q.jpg"

  @Input()
  notas;

  //Dependency
  //Injection
  //SERVICIOS -> Componentes
  //SERVICIOS -> SERVICIOS
  
  constructor(private readonly _carritoService: CarritoService) { }

  alertar(){
    alert('Auxilio me desmayo'+this.nombreItem)
  }

  alertarBlur(){
    alert('ALERTAR BLUR')
  }

  cambiarImagen(){
    const cervezas = "https://eldiariony.files.wordpress.com/2016/10/cervezacata.jpg?quality=80&strip=all&w=693"
    const chelas = "https://http2.mlstatic.com/biela-repuestos-mercedes-benzom-166-D_NQ_NP_642014-MLU26705950558_012018-Q.jpg"
    // let url3 = "https://eldiariony.files.wordpress.com/2016/10/cervezacata.jpg?quality=80&strip=all&w=693"
  if(this.url==cervezas){
    this.url=chelas
    this.cambioChela.emit(true)
  }else{
    this.url=cervezas
    this.cambioCerveza.emit(true)
  }
  
  }

  ngOnInit() {
    console.log('Empezo');
    console.log(this._carritoService.carritoCompras)
  }

  ngOnDestroy(){
    console.log('Termino');
  }

  agregarCarrito(valorCarrito){
    //this._carritoService.carritoCompras.push(valorCarrito);
    const itemCarrito={
      valor: valorCarrito,
      nombretienda: this.titulo
    };
    this._carritoService.carritoCompras
    .splice(0,0,itemCarrito);
    //donde empieza, cuanto borra, los items a 
    //ingresar
    console.log(this._carritoService.carritoCompras)

  }

}






