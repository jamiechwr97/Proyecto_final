import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistItemComponent } from './artist-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArtistItemComponent
  ],
  exports: [
    ArtistItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArtistItemModule { }
