import { Location } from '@angular/common';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Artista } from 'src/app/interfaces/artista';
import { Concierto } from 'src/app/interfaces/concierto';
import { ArtistaService } from 'src/app/services/artistas/artista.service';
import { ConciertoService } from 'src/app/services/conciertos/concierto.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-mostrar-concierto',
  templateUrl: './mostrar-concierto.component.html',
  styleUrls: ['./mostrar-concierto.component.css']
})
export class MostrarConciertoComponent implements OnInit {

  @ViewChild('confirm') confirm: any;
  route: string;
  id: number;
  categoria: any;
  concierto?: Concierto;
  artistas?: Artista[] = [];
  image: string;
  exists: boolean = false;
  alert: boolean = false;

  constructor(location: Location, private router: Router, private conciertoService: ConciertoService,
              private userService: UsuariosService, private artistaService: ArtistaService) {
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
    this.getOneConcert(this.id);
    this.getArtistsFromConcert(this.id);
    this.categoria = String(this.categoria);
    this.categoria = this.transform(this.categoria);

    let loader = new Loader({
      apiKey: 'AIzaSyB-LydL_0QMOCUB7FOCDahArHLopjxAoho'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById('map')!,{
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6
      })
    })
  }

  //esto se encarga de coger el concierto con el id que recibimos por el route y lo almacena en una variable de tipo concierto
  public getOneConcert(id: any) {
    this.conciertoService.getOneConcert(id).subscribe(
      (concierto: any) => {
        this.concierto = concierto[0]
        this.categoria = concierto[0].categoria
        if(concierto.imagen != undefined || concierto.imagen != null) {
          this.image = concierto.imagen;
        } else {
          this.image = '../../../assets/photos/error_image.jpg';
        }
      },
      error => console.error(error),
      () => console.log('Concierto cargado'),
    );
  }

  public getArtistsFromConcert(id: number) {
    this.artistaService.getArtistsConcert(id).subscribe(
      (artists: any) => {
        this.artistas = artists
      },
      error => console.error(error),
      () => console.log(this.artistas),
    );
  }

  transform(value: string): string {
    let first = value.substring(0,1).toUpperCase();
    return first + value.substring(1);
  }

  public reservarConcierto() {

    let user, u;

    if (this.userService.checkUserExist()) {
      user = JSON.parse(sessionStorage.getItem('user'));
      this.clickMethod();
    } else {
      this.alert = true;
    }
  }

  public closePopUp() {
    this.alert = false;
  }

  public clickMethod() {
    if(confirm("¿Estás seguro de que quieres reservar para este evento?")) {

    }
  }

}
