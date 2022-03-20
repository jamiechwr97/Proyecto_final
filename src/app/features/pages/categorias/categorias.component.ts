import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Concierto } from 'src/app/interfaces/concierto';
import { ConciertoService } from 'src/app/services/conciertos/concierto.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria: string = ''; //nombre de la categoría que se muestra en la página
  conciertos: Concierto[] = [];

  constructor(private _activeRouter: ActivatedRoute, private conciertoService: ConciertoService) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      this.categoria = params['nombre'];
    });
    this.conciertos = this.conciertoService.getAllFiltered(this.categoria);
    this.categoria = this.tranform(this.categoria);
  }

  tranform(value: string): string {
    let first = value.substring(0,1).toUpperCase();
    return first + value.substring(1);
  }
}
