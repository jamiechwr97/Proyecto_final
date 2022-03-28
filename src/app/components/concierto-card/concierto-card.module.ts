import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciertoCardComponent } from './concierto-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ConciertoCardComponent,
  ],
  exports: [
    ConciertoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ConciertoCardModule { }
