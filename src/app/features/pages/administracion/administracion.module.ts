import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ConciertoItemModule } from 'src/app/components/concierto-item/concierto-item.module';
import { SearchFilterPipe } from 'src/app/pipes/search-filter/search-filter.pipe';
import { ConciertoElimItemModule } from 'src/app/components/concierto-elim-item/concierto-elim-item.module';

@NgModule({
  declarations: [
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ConciertoItemModule,
    ConciertoElimItemModule
  ],
  providers: [
  ]
})
export class AdministracionModule { }
