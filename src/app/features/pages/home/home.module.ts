import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ConciertoCardModule } from 'src/app/components/concierto-card/concierto-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ConciertoCardModule,
    RouterModule
  ]
})
export class HomeModule { }
