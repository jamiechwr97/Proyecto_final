import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { CategoriasComponent } from './categorias.component';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoriasComponent,
  ],
  imports: [
    CommonModule,
    ActivatedRoute,
    RouterModule
  ]
})
export class CategoriasModule { }
