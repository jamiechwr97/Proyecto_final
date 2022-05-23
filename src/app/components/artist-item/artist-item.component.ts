import { Component, Input, OnInit } from '@angular/core';
import { Artista } from 'src/app/interfaces/artista';
import { Concierto } from 'src/app/interfaces/concierto';
import { ConciertoService } from 'src/app/services/conciertos/concierto.service';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent implements OnInit {

  @Input() artista: Artista;
  @Input() index: number;
  image: string;
  total: Concierto[] = [];
  cantidad: Number;

  constructor(private conciertoService: ConciertoService) { }

  ngOnInit(): void {
    this.getTotalConciertos();
    if(this.artista?.imagen == undefined || this.artista?.imagen == null) {
      this.image = '../../../assets/photos/error_image.jpg';
    } else {
      this.image = this.artista?.imagen;
    }
  }

  getTotalConciertos() {
    this.conciertoService.totalConciertosArtista(this.artista!.id_artista).subscribe(
      conciertos => {
        this.total = conciertos
        if(this.total.length) {
          this.cantidad = this.total.length
        } else {
          this.cantidad = 0;
        }
      },
      error => console.error(error),
      () => console.log('Conciertos contados')
    );
  }

}
