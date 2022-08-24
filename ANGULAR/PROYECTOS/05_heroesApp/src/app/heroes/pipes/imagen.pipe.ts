import { Pipe, PipeTransform } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  //pure: false, //Detecta cambios en objetos compuestos
  pure:true, //Solo detecta cambios en valor primitivos y ref a objetos //Detecta cambios en objetos compuestos
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    console.log("Pipe procesado")
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
