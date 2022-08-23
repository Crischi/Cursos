import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
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
    private activatedRoute: ActivatedRoute, //detecta cambios url
    private router: Router //Permite navegar entre rutas
  ) {}

  ngOnInit(): void {

    //En caso de estar en la ruta de edicion no realiza peticion
    if (!this.router.url.includes('editar')) {
      return;
    }

    //al cambiar la url (editar heroe) abre formulario volcando sus datos
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroesId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  guardarDatosHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    //Diferenciamos actualizar de agregar
    if (this.heroe.id) {
      this.heroesService
        .actualizarHeroe(this.heroe)
        .subscribe((heroe) => console.log('Actualizando...', heroe));
    } else {
      this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/editar', heroe.id]); //Navegar a la nueva url
      });
    }
  }
}
