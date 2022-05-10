import { Location } from '@angular/common';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Concierto } from 'src/app/interfaces/concierto';
import { ConciertoService } from 'src/app/services/conciertos/concierto.service';

@Component({
  selector: 'app-mostrar-concierto',
  templateUrl: './mostrar-concierto.component.html',
  styleUrls: ['./mostrar-concierto.component.css']
})
export class MostrarConciertoComponent implements OnInit {
  route: string;
  id: number;
  categoria: any;
  concierto?: Concierto;
  image: string;

  constructor(location: Location, private router: Router, private conciertoService: ConciertoService) {
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

  transform(value: string): string {
    let first = value.substring(0,1).toUpperCase();
    return first + value.substring(1);
  }

}
