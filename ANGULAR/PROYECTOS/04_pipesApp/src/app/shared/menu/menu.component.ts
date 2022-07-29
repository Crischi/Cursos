import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      //Primer item menu
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop', //Icono monitor
        //Subitems
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left', //Icono alineacion
            routerLink: '/'//Redirecciona a ruta básica
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar', //Icono dolar
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe', //Icono tierra
            routerLink: 'no-comunes'
          },
        ],
      },
      //Segundo item del menu
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog', //Icono tuerca
        routerLink: 'ordenar'

      }
    ];
  }
}
