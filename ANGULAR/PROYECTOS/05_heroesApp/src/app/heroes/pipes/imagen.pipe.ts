import { Pipe, PipeTransform } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    //Si no existe img ni url
    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png';
      //Si exxiste url
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
}
