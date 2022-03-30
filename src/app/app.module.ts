import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeModule } from './features/pages/home/home.module';
import { ConciertoItemModule } from './components/concierto-item/concierto-item.module';
import { CategoriasModule } from './features/pages/categorias/categorias.module';
import { AllArtistsModule } from './features/pages/all-artists/all-artists.module';
import { SearchFilterPipe } from './pipes/search-filter/search-filter.pipe';
import { MostrarConciertoComponent } from './features/pages/mostrar-concierto/mostrar-concierto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { ArtistsComponent } from './features/pages/artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MostrarConciertoComponent,
    ArtistsComponent,
    LazyImgDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
