import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CategoriasComponent } from './features/pages/categorias/categorias.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'home' },
  { path: 'home', component: HomeComponent },
  /*{ path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/:nombre' },
  { path: 'concierto/:nombre' },
  { path: 'artistas' },
  { path: 'artistas/:nombre' },
  { path: 'register' },*/
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
