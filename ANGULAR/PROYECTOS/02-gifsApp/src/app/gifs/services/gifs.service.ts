import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'p744Or0EUuyglaKC8U80R9RMBt29rx37';
  public resultados: Gif[] = []; //TODO cambiar tipo any

  get historial() {
    return [...this._historial];
  }

  //Se ejecuta la primar vez que se lanza el servicio
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string) {
    //Paso a minusculas par que no duplique a,A
    query = query.trim().toLocaleLowerCase();

    //Si no existe, incluyo en el historial
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);

      this._historial = this._historial.splice(0, 10); //Limito historial a las 10 últimas busquedas
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=p744Or0EUuyglaKC8U80R9RMBt29rx37&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;

        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
