import { Component, Input, OnInit } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';

@Component({
  selector: 'concierto-item',
  templateUrl: './concierto-item.component.html',
  styleUrls: ['./concierto-item.component.css']
})
export class ConciertoItemComponent implements OnInit {

  @Input() concierto: Concierto;
  @Input() index: number;
  fecha: any;

  constructor() { }

  ngOnInit(): void {
    this.fecha = this.concierto.fecha.toDateString();
    this.fecha = String(this.fecha);
  }

}
