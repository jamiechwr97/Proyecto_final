import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaElimItemComponent } from './artista-elim-item.component';



@NgModule({
  declarations: [
    ArtistaElimItemComponent
  ],
  exports: [
    ArtistaElimItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArtistaElimItemModule { }
