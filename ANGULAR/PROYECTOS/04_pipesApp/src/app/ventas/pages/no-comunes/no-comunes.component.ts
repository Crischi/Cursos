import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Pepe';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'conocerlo',
    femenino: 'conocerla',
  };
  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    console.log('CambiandoCLiente');
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }
  borrarCliente() {
    console.log('BorrandoCLiente');
    this.clientes.pop();
    console.log(this.clientes);
  }

  //KeyValuePipe
  persona = {
    nombre: 'Cris',
    edad: 40,
    direccion: 'Valencia',
  };

  //JsonPipe
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Robin', vuela: false },
    { nombre: 'Aquaman', vuela: false },
  ];

  //AsyncPipe
  miObservable= interval(1000);//0,1,2,3

  miPromesa = new Promise ((resolve,reject)=>{
    setTimeout(() => {
      resolve('Promesa resuelta!')
    }, 3500);
  })
}
