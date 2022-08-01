import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  esMayusculas: boolean = true;
  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Daredevil', vuela: false, color: Color.rojo },
    { nombre: 'Linterna Verde', vuela: true, color: Color.verde },

  ];
  ordenarPor:string='';

  cambiarFormato() {
    this.esMayusculas = !this.esMayusculas;
    // this.esMayusculas
    //   ? (this.esMayusculas = false)
    //   : (this.esMayusculas = true);
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
  }
}
