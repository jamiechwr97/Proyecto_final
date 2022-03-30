import { Component, Input, OnInit } from '@angular/core';
import { Artista } from 'src/app/interfaces/artista';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent implements OnInit {

  @Input() artista: Artista;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
