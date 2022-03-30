import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArtistsModule { }
