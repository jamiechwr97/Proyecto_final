import { Pipe, PipeTransform } from '@angular/core';
import { Artista } from 'src/app/interfaces/artista';

@Pipe({
  name: 'filterArtists'
})
export class FilterArtistsPipe implements PipeTransform {

  transform(con: Artista[], filterBy: string): Artista[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    if(filter){
      return con.filter(co => co.nombre.toLocaleLowerCase().includes(filter))
    }
    return con;
  }

}
