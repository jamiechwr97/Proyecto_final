import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CategoriasComponent } from './features/pages/categorias/categorias.component';
import { MostrarConciertoComponent } from './features/pages/mostrar-concierto/mostrar-concierto.component';
import { ArtistsComponent } from './features/pages/artists/artists.component';
import { AllArtistsComponent } from './features/pages/all-artists/all-artists.component';
import { MostrarArtistaComponent } from './features/pages/mostrar-artista/mostrar-artista.component';
import { AdministracionComponent } from './features/pages/administracion/administracion.component';
import { RegistrarComponent } from './features/pages/registrar/registrar.component';
import { PerfilComponent } from './features/pages/perfil/perfil.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home' },
  { path: 'home', component: HomeComponent },
  { path: 'categorias/:nombre', component: CategoriasComponent },
  { path: 'concierto/:nombre', component: MostrarConciertoComponent },
  { path: 'artistas', component: ArtistsComponent },
  { path: 'artistas/:nombre', component: AllArtistsComponent },
  { path: 'artista/:nombre', component: MostrarArtistaComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
