import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './Servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ], //componentes
  imports: [
    BrowserModule //commparte la funcionalidad de las directivas
  ], //modulos
  providers: [CarritoService], //servicios
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }
