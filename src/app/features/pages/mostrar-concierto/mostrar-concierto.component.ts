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
  fecha: any;
  concierto?: Concierto;

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
    this.concierto = this.conciertoService.getOneConcert(this.id);
    this.categoria = this.concierto?.categoria;
    this.categoria = String(this.categoria);
    this.categoria = this.transform(this.categoria);
    this.fecha = this.concierto?.fecha.toDateString();
    this.fecha = String(this.fecha);
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

  transform(value: string): string {
    let first = value.substring(0,1).toUpperCase();
    return first + value.substring(1);
  }

}
