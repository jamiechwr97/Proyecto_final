import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artista } from 'src/app/interfaces/artista';
import { ArtistaService } from 'src/app/services/artistas/artista.service';

@Component({
  selector: 'app-mostrar-artista',
  templateUrl: './mostrar-artista.component.html',
  styleUrls: ['./mostrar-artista.component.css']
})
export class MostrarArtistaComponent implements OnInit {

  nombre: string;
  fecha: any;
  artista?: Artista;

  constructor(private _activeRouter: ActivatedRoute, private artistaService: ArtistaService) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
    });
    this.artista = this.artistaService.getOneArtist(this.nombre);
    this.fecha = this.artista?.fechaNacimiento.toDateString();
    this.fecha = String(this.fecha);
  }

}
