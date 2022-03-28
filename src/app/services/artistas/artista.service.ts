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
  ]
  constructor() { }

  anadirArtista(a: Artista) {
    this.artistas.push(a);
  }

  getAll() {
    return this.artistas;
  }

  getOneConcert(id: number) {
    return this.artistas.find(x => {
      return x.id === id;
    });
  }
}
