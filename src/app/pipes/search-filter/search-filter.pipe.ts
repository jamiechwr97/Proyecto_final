import { Pipe, PipeTransform } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(con: Concierto[], filterBy: string): Concierto[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    if(filter){
      return con.filter(co => co.nombre.toLocaleLowerCase().includes(filter))
    }
    return con;
  }

}
