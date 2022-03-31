import { Injectable } from '@angular/core';
import { Artista } from 'src/app/interfaces/artista';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  artistas: Artista[] = [
    {
      id: 1,
      nombre: 'Bad Bunny',
      fechaNacimiento: new Date('03/10/1994'),
      lugarNacimiento: 'Almirante Sur',
      pais: 'Puerto Rico',
      img: '../../../assets/photos/artistas/badbunny.jpeg',
      categoria: 'latina'
    },
    {
      id: 2,
      nombre: 'AC/DC',
      fechaNacimiento: new Date('01/06/1953'),
      lugarNacimiento: 'Glasgow',
      pais: 'Escocia',
      img: '../../../assets/photos/artistas/acdc.jpeg',
      categoria: 'rock'
    },
    {
      id: 3,
      nombre: 'J Balvin',
      fechaNacimiento: new Date('05/07/1985'),
      lugarNacimiento: 'Medellín',
      pais: 'Colombia',
      img: '../../../assets/photos/artistas/balvin.jpeg',
      categoria: 'latina'
    },
    {
      id: 4,
      nombre: 'Rels B',
      fechaNacimiento: new Date('10/18/1993'),
      lugarNacimiento: 'Palma de Mallorca',
      pais: 'España',
      img: '../../../assets/photos/artistas/rels.jpeg',
      categoria: 'hip-hop'
    },
    {
      id: 5,
      nombre: 'The Weeknd',
      fechaNacimiento: new Date('02/16/1990'),
      lugarNacimiento: 'Toronto',
      pais: 'Canadá',
      img: '../../../assets/photos/artistas/weeknd.jpeg',
      categoria: 'pop'
    },
    {
      id: 6,
      nombre: 'Ed Sheeran',
      fechaNacimiento: new Date('02/17/1991'),
      lugarNacimiento: 'Halifax',
      pais: 'Inglaterra',
      img: '../../../assets/photos/artistas/sheeran.jpeg',
      categoria: 'pop'
    },
    {
      id: 7,
      nombre: 'Mike Towers',
      fechaNacimiento: new Date('01/15/1994'),
      lugarNacimiento: 'Río Piedras',
      pais: 'Puerto Rico',
      img: '../../../assets/photos/artistas/towers.jpeg',
      categoria: 'latina'
    },
    {
      id: 8,
      nombre: 'Dua Lipa',
      fechaNacimiento: new Date('08/22/1995'),
      lugarNacimiento: 'Londres',
      pais: 'Inglaterra',
      img: '../../../assets/photos/artistas/lipa.jpeg',
      categoria: 'pop'
    },
    {
      id: 9,
      nombre: 'Eminem',
      fechaNacimiento: new Date('10/17/1972'),
      lugarNacimiento: 'Missouri',
      pais: 'EEUU',
      img: '../../../assets/photos/artistas/eminem.jpeg',
      categoria: 'hip-hop'
    },
    {
      id: 10,
      nombre: 'Morad',
      fechaNacimiento: new Date('03/05/1999'),
      lugarNacimiento: 'Hospitalet',
      pais: 'España',
      img: '../../../assets/photos/artistas/morad.jpeg',
      categoria: 'hip-hop'
    },
  ]
  constructor() { }

  anadirArtista(a: Artista) {
    this.artistas.push(a);
  }

  getAll() {
    return this.artistas;
  }

  getAllCategory(c: string) {
    return this.artistas.filter((x) => {
      return x.categoria === c;
    });
  }

  getOneArtist(nombre: string) {
    return this.artistas.find(x => {
      return x.nombre === nombre;
    });
  }
}
