import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CategoriasComponent } from './features/pages/categorias/categorias.component';
import { MostrarConciertoComponent } from './features/pages/mostrar-concierto/mostrar-concierto.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home' },
  { path: 'home', component: HomeComponent },
  { path: 'categorias/:nombre', component: CategoriasComponent },
  { path: 'concierto/:nombre', component: MostrarConciertoComponent },
  /*{ path: 'artistas' },
  { path: 'artistas/:nombre' },
  { path: 'register' },*/
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
