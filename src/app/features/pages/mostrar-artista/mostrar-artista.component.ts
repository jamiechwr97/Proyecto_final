import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Artista } from 'src/app/interfaces/artista';
import { ArtistaService } from 'src/app/services/artistas/artista.service';
import { Location } from '@angular/common';
import { Concierto } from 'src/app/interfaces/concierto';
import { ConciertoService } from 'src/app/services/conciertos/concierto.service';

@Component({
  selector: 'app-mostrar-artista',
  templateUrl: './mostrar-artista.component.html',
  styleUrls: ['./mostrar-artista.component.css']
})
export class MostrarArtistaComponent implements OnInit {
  route: string;
  id: number;
  artista?: Artista;
  image: string;
  total: Concierto[] = [];
  cantidad: number;
  conciertos: Concierto[] = [];

  constructor(location: Location, private router: Router, private _activeRouter: ActivatedRoute,
              private artistaService: ArtistaService, private conciertoService: ConciertoService) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path().substring(location.path().indexOf(':')+1);
      } else {
        this.route = "Home";
      }
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route);
    this.getArtist(this.id);
    this.getProximosConciertos(this.id);
    this.getTotalConciertos(this.id);
    console.log(this.conciertos.length);
  }

  getArtist(id: number) {
    this.artistaService.getOneArtist(id).subscribe(
      (artista: any) => {
        this.artista = artista[0]
        if(artista[0].imagen == undefined || artista[0].imagen == null) {
          this.image = '../../../assets/photos/error_image.jpg';
        } else {
          this.image = artista[0].imagen;
        }
      },
      error => console.error(error),
      () => console.log("Artista cargado"),
    );
  }

  getProximosConciertos(id: any) {
    this.conciertoService.getProximos(id).subscribe(
      (conciertos: any) => {
        this.conciertos = conciertos
      },
      error => console.error(error),
      () => console.log('Conciertos cargados')
    );
  }

  getTotalConciertos(id: any) {
    this.conciertoService.totalConciertosArtista(id).subscribe(
      (conciertos: any) => {
        this.total = conciertos
        if(this.total.length) {
          this.cantidad = this.total.length
        } else {
          this.cantidad = 0;
        }
      },
      error => console.error(error),
      () => console.log('Conciertos contados')
    );
  }

}
