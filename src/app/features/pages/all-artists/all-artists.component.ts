import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artista } from 'src/app/interfaces/artista';
import { ArtistaService } from 'src/app/services/artistas/artista.service';

@Component({
  selector: 'app-all-artists',
  templateUrl: './all-artists.component.html',
  styleUrls: ['./all-artists.component.css']
})
export class AllArtistsComponent implements OnInit {

  categoria: string = '';
  artistas: Artista[] = [];
  id: number = 0;
  cantidadArtistas: number = 0;
  filterSearch = '';

  constructor(private _activeRouter: ActivatedRoute, private artistasService: ArtistaService) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      this.categoria = params['nombre'];
    });
    this.id = this.getCategoryId(this.categoria)!;
    this.getArtistsCategorized(this.id);
  }

  public getArtistsCategorized(id: number) {
    this.artistasService.getAllCategory(id).subscribe(
      (artistas: any) => {
        this.artistas = artistas
        this.cantidadArtistas = artistas.length
      },
      error => console.error(error),
      () => console.log('Artistas listados'),
    );
  }

  public getCategoryId(cat: string) {
    switch(cat){
      case "country": {
        return 1;
      }
      case "clasica": {
        return 2;
      }
      case "edm": {
        return 3;
      }
      case "hip-hop": {
        return 4;
      }
      case "latina": {
        return 5;
      }
      case "jazz": {
        return 6;
      }
      case "pop": {
        return 7;
      }
      case "rock": {
        return 8;
      }
      default: {
        return 0;
      }
    }
  }
}
