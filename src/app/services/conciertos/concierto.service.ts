import { Injectable } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';

@Injectable({
  providedIn: 'root'
})
export class ConciertoService {

  conciertos: Concierto[] = [
    {
      id: 1,
      nombre: 'Tributo AC/DC',
      fecha: new Date('03/15/2022'),
      hora: '20:45',
      lugar: 'Madrid - Wizink Center',
      artista: 'AC/DC',
      img: '../../../assets/photos/conciertos/acdc.jpeg'
    },
    {
      id: 2,
      nombre: 'Dani Martin',
      fecha: new Date('03/16/2022'),
      hora: '20:00',
      lugar: 'Madrid - Wizink Center',
      artista: 'Dani Martin',
      img: '../../../assets/photos/conciertos/dani.jpeg'
    },
    {
      id: 3,
      nombre: 'Rayden',
      fecha: new Date('08/22/2022'),
      hora: '21:00',
      lugar: 'Alicante - Las Cigarreras',
      artista: 'Rayden',
      img: '../../../assets/photos/conciertos/rayden.jpeg'
    },
    {
      id: 4,
      nombre: 'Bruno Mars',
      fecha: new Date('06/02/2022'),
      hora: '20:45',
      lugar: 'Barcelona - Estadio Olímpico',
      artista: 'Bruno Mars',
      img: '../../../assets/photos/conciertos/bruno.jpeg'
    },
    {
      id: 5,
      nombre: 'Iron Maiden',
      fecha: new Date('03/29/2022'),
      hora: '21:00',
      lugar: 'Madrid - Wizink Center',
      artista: 'Iron Maiden',
      img: '../../../assets/photos/conciertos/maiden.jpeg'
    },
    {
      id: 6,
      nombre: 'Malú',
      fecha: new Date('03/10/2022'),
      hora: '20:30',
      lugar: 'Barcelona - Palau Sant Jordi',
      artista: 'Malú',
      img: '../../../assets/photos/conciertos/malu.jpeg'
    }
  ];

  conciertosOrden: Concierto[] = [];

  constructor() { }

  anadirConcierto(c: Concierto) {
    this.conciertos.push(c);
  }

  getAll() {
    return this.conciertos;
  }

  getAllOrdenados() {
    this.conciertosOrden = this.conciertos.slice().sort(function(a, b){
      return new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    });

    return this.conciertosOrden;
  }

  addEvento(c: Concierto) {
    this.conciertos.push(c);
  }

  elimEvento(i: number) {
    this.conciertos.splice(i, 1);
  }
}
