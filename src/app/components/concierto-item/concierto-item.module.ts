import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciertoItemComponent } from './concierto-item.component';



@NgModule({
  declarations: [
    ConciertoItemComponent
  ],
  exports: [
    ConciertoItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConciertoItemModule { }
