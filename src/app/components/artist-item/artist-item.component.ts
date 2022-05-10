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
  image: string;

  constructor() { }

  ngOnInit(): void {
    if(this.artista?.imagen == undefined || this.artista?.imagen == null) {
      this.image = '../../../assets/photos/error_image.jpg';
    } else {
      this.image = this.artista?.imagen;
    }
  }

}
