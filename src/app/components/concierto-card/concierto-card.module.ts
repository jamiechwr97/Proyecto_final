import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciertoCardComponent } from './concierto-card.component';


@NgModule({
  declarations: [
    ConciertoCardComponent
  ],
  exports: [
    ConciertoCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConciertoCardModule { }
