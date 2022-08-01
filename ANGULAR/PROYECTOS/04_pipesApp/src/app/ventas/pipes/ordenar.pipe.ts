import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(value: Heroe[], ordenar: string = 'sin valor'): Heroe[] {
    switch (ordenar) {
      case 'nombre':
        //ordena alfabéticamente
        return value.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
      case 'vuela':
        //ordena primero false y luego true, cambio orden para que lo devuelva -1/1
        return value.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));
      case 'color':
        //ordena primero false y luego true
        return value.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return value;
    }
  }
}
