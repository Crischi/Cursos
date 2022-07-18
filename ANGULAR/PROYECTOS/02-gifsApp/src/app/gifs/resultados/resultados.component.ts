import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {
  //Inyecto servicio
  constructor(private gifsService: GifsService) {}

  //Recupero propiedad resultados del servicio
  get resultados() {
    return this.gifsService.resultados;
  }
}
