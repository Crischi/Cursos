import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}
  
  activarRegion(region: string) {
    //En caso de ser la misma no ejecuto el método.
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;

    //Purgo para que vaya más rápido
    this.paises = []; 

    this.paisService
      .buscarRegion(this.regionActiva)
      .subscribe((resp) => (this.paises = resp));
  }

  getClassCSS(region: string): string {
    return this.regionActiva === region
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
