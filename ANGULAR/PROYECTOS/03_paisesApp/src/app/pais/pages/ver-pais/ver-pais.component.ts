import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country; //Indico que puede ser nulo

  //ActivatedRoute proporciona todo lo necesario para suscribirnos a los cambios en la url
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    //params observable puedo hacerle subscribe.
    //En lugar de recibir params desestructuro y recibo solo id.

    this.activatedRoute.params
      .pipe(
      switchMap((param) => this.paisService.buscarCodigo(param['id'])),
      tap(console.log)
      //imprime lo que recibe en la instruccion anterior
      //equvaldría a hacer resp=> console.log(resp)
      )
      .subscribe((pais) => {this.pais = pais[0];}
      );

    }
}
