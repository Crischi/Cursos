import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ResultadosComponent } from '../../../../../../02-gifsApp/src/app/gifs/resultados/resultados.component';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((resp) => (this.heroes = resp));
  }
}
