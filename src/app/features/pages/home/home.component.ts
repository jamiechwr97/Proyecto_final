import { Component, OnInit } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';
import { ConciertoService } from 'src/app/services/conciertos/concierto.service';

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
    this.conciertos = this.conciertoService.getAll();
    this.conciertosOrdenados = this.conciertoService.getAllOrdenados();
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
}
