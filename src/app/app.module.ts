import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeModule } from './features/pages/home/home.module';
import { CategoriasModule } from './features/pages/categorias/categorias.module';
import { AllArtistsModule } from './features/pages/all-artists/all-artists.module';
import { MostrarConciertoComponent } from './features/pages/mostrar-concierto/mostrar-concierto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { ArtistsComponent } from './features/pages/artists/artists.component';
import { MostrarArtistaComponent } from './features/pages/mostrar-artista/mostrar-artista.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministracionComponent } from './features/pages/administracion/administracion.component';
import { ConciertoElimItemModule } from './components/concierto-elim-item/concierto-elim-item.module';
import { ArtistaElimItemModule } from './components/artista-elim-item/artista-elim-item.module';
import { RegistrarComponent } from './features/pages/registrar/registrar.component';
import { PerfilComponent } from './features/pages/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MostrarConciertoComponent,
    ArtistsComponent,
    MostrarArtistaComponent,
    AdministracionComponent,
    RegistrarComponent,
    PerfilComponent,
    LazyImgDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConciertoElimItemModule,
    ArtistaElimItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
