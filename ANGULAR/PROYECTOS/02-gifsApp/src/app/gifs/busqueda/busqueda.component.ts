import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') mitxt!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar() {
    //Accedo al valor de la caja de texto al soltar enter
    const valor = this.mitxt.nativeElement.value;

    //En casp de dar a enter sin introducir nada en la caja
    if (valor.trim().length===0){
      return;
    }
    //Añado el valor de la caja al historial
    this.gifsService.buscarGifs(valor);
    
    //Limpio caja de texto
    this.mitxt.nativeElement.value = '';
  }
}
