import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciertoItemComponent } from './concierto-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConciertoItemComponent
  ],
  exports: [
    ConciertoItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ConciertoItemModule { }
