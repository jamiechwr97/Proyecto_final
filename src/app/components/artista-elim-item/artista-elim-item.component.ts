import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artista } from 'src/app/interfaces/artista';

@Component({
  selector: 'artista-elim-item',
  templateUrl: './artista-elim-item.component.html',
  styleUrls: ['./artista-elim-item.component.css']
})
export class ArtistaElimItemComponent implements OnInit {

  @Input() artista: Artista;
  @Input() index: number;
  @Output() ArtistaBorrar: EventEmitter<any> = new EventEmitter();
  @Output() IndexBorrar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  elimArtista() {
    this.ArtistaBorrar.emit(this.artista.id_artista);
    this.IndexBorrar.emit(this.index);
  }

}
