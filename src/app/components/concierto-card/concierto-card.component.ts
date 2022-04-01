import { Component, Input, OnInit } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';

@Component({
  selector: 'app-concierto-card',
  templateUrl: './concierto-card.component.html',
  styleUrls: ['./concierto-card.component.css']
})
export class ConciertoCardComponent implements OnInit {

  //con el input recogemos los datos del evento pasado por el padre
  @Input() concierto?: Concierto;
  fecha: any;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.concierto);
    this.fecha = this.concierto?.fecha.toDateString();
    this.fecha = String(this.fecha);
  }

}
