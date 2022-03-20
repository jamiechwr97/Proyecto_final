import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ConciertoCardModule } from 'src/app/components/concierto-card/concierto-card.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ConciertoCardModule
  ]
})
export class HomeModule { }
