import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: Boolean = false;
  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino; //recibo termino y lo asocio a la propiedad
    this.paisService
      .buscarPais(this.termino)
      //TODO establecer un tipo
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.paises = resp;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        },
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe({
      next: (resp) => (this.paisesSugeridos = resp.slice(0, 3)),
      error: (err) => (this.paisesSugeridos = []),
    });
  }

  // buscarSugerido(termino: string) {
  //   this.buscar(termino);
  // }
}
