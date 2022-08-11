import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    //id no obligatorio
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //al cambiar la url (editar heroe) abre formulario volcando sus datos
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroesId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  guardarDatosHeroe() {
    if (this.heroe.superhero.trim().length === 0) {return;}
    //Diferenciamos editar de añadir
    if (this.heroe.id) {
      //Actualizar
      this.heroesService
        .actualizarHeroe(this.heroe)
        .subscribe((heroe) => console.log('Actualizando...', heroe));
    } else {
      //Crear   this.heroesService
      this.heroesService
        .agregarHeroe(this.heroe)
        .subscribe((resp) => console.log('Respuesta:', resp));
    }
  }
}
