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
  filterSearch = '';

  constructor(private _activeRouter: ActivatedRoute, private artistasService: ArtistaService) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      this.categoria = params['nombre'];
    });
    this.artistas = this.artistasService.getAllCategory(this.categoria);
  }

}
