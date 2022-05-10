import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ConciertoCardModule } from 'src/app/components/concierto-card/concierto-card.module';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ConciertoCardModule,
    RouterModule,
    SlickCarouselModule,
    HttpClientModule
  ]
})
export class HomeModule { }
