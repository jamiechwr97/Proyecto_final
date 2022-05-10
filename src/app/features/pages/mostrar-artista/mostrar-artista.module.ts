import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarArtistaComponent } from './mostrar-artista.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule
  ]
})
export class MostrarArtistaModule { }
