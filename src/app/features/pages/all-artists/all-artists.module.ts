import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllArtistsComponent } from './all-artists.component';
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from 'src/app/pipes/search-filter/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ArtistItemModule } from 'src/app/components/artist-item/artist-item.module';
import { FilterArtistsPipe } from 'src/app/pipes/artists-filter/filter-artists.pipe';

@NgModule({
  declarations: [
    AllArtistsComponent,
    FilterArtistsPipe
  ],
  imports: [
    CommonModule,
    ArtistItemModule,
    RouterModule,
    FormsModule
  ]
})
export class AllArtistsModule { }
