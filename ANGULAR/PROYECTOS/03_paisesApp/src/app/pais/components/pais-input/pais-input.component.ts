import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //lanzamos cuando al cliente deja de escribir

  debouncer: Subject<string> = new Subject(); //Permite crear un observable que se emitirá cuando dejen de escribir

  @Input() termino: string = '';
  @Input() placeholder: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(1000)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  /*puedo usar el valor de this.termino o pasarlo como argumento
    teclaPresionada(event: any)
    const valor = event.target.value;*/
  teclaPresionada() {
    //Cada vez que alguien pulse una tecla ejecuta el next
    //mando el siguiente valor
    //lo hace a traves del subscribe ejecutando ngOnInit
    this.debouncer.next(this.termino);
  }
}
