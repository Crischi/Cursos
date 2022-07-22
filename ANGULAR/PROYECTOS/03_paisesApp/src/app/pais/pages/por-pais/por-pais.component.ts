import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises : Country[]= [];

  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
    this.hayError = false;
    this.termino=termino; //recibo termino y lo asocio a la propiedad
    this.paisService
      .buscarPais(this.termino)
      //TODO establecer un tipo
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.paises=resp;
        },
        error: (err) => {
          this.hayError = true;
          this.paises=[];
        },
      });
  }

  sugerencias(termino:string){
    this.hayError=false;
    //TODO: creas sugerencias
  }
}