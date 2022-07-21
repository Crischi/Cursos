import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private _historial: string[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'p744Or0EUuyglaKC8U80R9RMBt29rx37';
  public resultados: Gif[] = []; 

  get historial() {
    return [...this._historial];
  }

  //Se ejecuta 1 vez para toda la app, cuando se ejecuta el servicio.
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);//Añade elemento al historial
      this._historial = this._historial.splice(0, 10); //Limito 10 últimas busquedas
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params:params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
