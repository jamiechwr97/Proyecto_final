import { analyzeAndValidateNgModules } from '@angular/compiler';
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
  cantidadConciertos: number = 0;
  filterSearch = '';
  filterBox: any;

  constructor(private _activeRouter: ActivatedRoute, private conciertoService: ConciertoService) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      this.categoria = params['nombre'];
    });
    this.conciertos = this.conciertoService.getAllFiltered(this.categoria);
    this.categoria = this.tranform(this.categoria);
    this.cantidadConciertos = this.conciertos.length;
  }

  tranform(value: string): string {
    let first = value.substring(0,1).toUpperCase();
    return first + value.substring(1);
  }

  toggleDisplay() {
    this.filterBox = document.getElementById('filters');
    if(this.filterBox.style.display == "none") {
      this.filterBox.style.display = "block";
      document.getElementById('lista')!.classList.add('col-8');
      document.getElementById('lista')!.classList.add('col-md-9');
      document.getElementById('lista')!.classList.add('col-lg-10');
      document.getElementById('lista')!.classList.remove('col-12');
    } else {
      this.filterBox.style.display = "none";
      document.getElementById('lista')!.classList.remove('col-8');
      document.getElementById('lista')!.classList.remove('col-md-9');
      document.getElementById('lista')!.classList.remove('col-lg-10');
      document.getElementById('lista')!.classList.add('col-12');
    }
  }
}
