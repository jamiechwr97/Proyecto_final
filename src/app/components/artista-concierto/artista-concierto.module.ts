import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaConciertoComponent } from './artista-concierto.component';



@NgModule({
  declarations: [
    ArtistaConciertoComponent
  ],
  exports: [
    ArtistaConciertoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArtistaConciertoModule { }
