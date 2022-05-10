import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';

@Component({
  selector: 'concierto-elim-item',
  templateUrl: './concierto-elim-item.component.html',
  styleUrls: ['./concierto-elim-item.component.css']
})
export class ConciertoElimItemComponent implements OnInit {

  @Input() concierto: Concierto;
  @Input() index: number;
  @Output() ConciertoBorrar: EventEmitter<any> = new EventEmitter();
  @Output() IndexBorrar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  elimConcierto() {
    this.ConciertoBorrar.emit(this.concierto.id);
    this.IndexBorrar.emit(this.index);
  }

}
