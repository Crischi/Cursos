import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos personalizados
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeES from '@angular/common/locales/es-HN';
import localeFR from '@angular/common/locales/fr';

import { registerLocaleData} from '@angular/common';
registerLocaleData( localeES);
registerLocaleData( localeFR);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID , useValue: 'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
