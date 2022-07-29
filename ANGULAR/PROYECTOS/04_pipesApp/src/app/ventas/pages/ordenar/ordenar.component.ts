import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  esMayusculas: boolean = true;

  cambiarFormato() {
    this.esMayusculas=!this.esMayusculas;
    // this.esMayusculas
    //   ? (this.esMayusculas = false)
    //   : (this.esMayusculas = true);
  }
}
