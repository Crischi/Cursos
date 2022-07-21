import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  //En caso de no especificar una ruta
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  //Resto de rutas
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  //Ruta ver por pais. Indico con: el id del pais ya que será dinámico
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  //En caso de especificar culaquier otra ruta redirigimos a la primera
  {
    path: '**',
    redirectTo: '', //tb podríamos mostrar un componente por defeccto
  },
];

@NgModule({
  //indico que usaré routes[] para las rutas principales, para subrutas sería forChild()
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], //Exporto para poder usarlo desde otro modulo.
})
export class AppRoutingModule {}
