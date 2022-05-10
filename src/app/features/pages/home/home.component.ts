import { Component, OnInit, ViewChild } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';
import { ConciertoService } from 'src/app/services/conciertos/concierto.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  conciertos: Concierto[] = [];
  conciertosOrdenados: Concierto[] = [];

  constructor(private conciertoService: ConciertoService) { }

  ngOnInit(): void {
    this.getCardConcerts();
    this.conciertosOrdenados = this.conciertoService.getAllOrdenados();
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  public getCardConcerts() {
    this.conciertoService.getTop5().subscribe(
      conciertos => this.conciertos = conciertos,
      error => console.error(error),
      () => console.log('Conciertos cargados')
    );
  }

  slideConfig = { slidesToShow: 3, slidesToScroll: 1, arrows: false};

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

next() {
  this.slickModal.slickNext();
}

prev() {
  this.slickModal.slickPrev();
}

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
