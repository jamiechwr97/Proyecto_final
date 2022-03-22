import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { CategoriasComponent } from './categorias.component';
import { RouterModule } from '@angular/router';
import { ConciertoItemModule } from 'src/app/components/concierto-item/concierto-item.module';
import { SearchFilterPipe } from 'src/app/pipes/search-filter/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriasComponent,
    SearchFilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ConciertoItemModule,
    FormsModule
  ]
})
export class CategoriasModule { }
