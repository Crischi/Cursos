import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent], //para poder usarlo fuera del modulo
  imports: [CommonModule],
})
export class SharedModule {}
