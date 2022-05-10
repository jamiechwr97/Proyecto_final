import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciertoElimItemComponent } from './concierto-elim-item.component';



@NgModule({
  declarations: [
    ConciertoElimItemComponent
  ],
  exports: [
    ConciertoElimItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConciertoElimItemModule { }
