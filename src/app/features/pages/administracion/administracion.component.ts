import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { Artista } from 'src/app/interfaces/artista';
import { Categoria } from 'src/app/interfaces/categoria';
import { Concierto } from 'src/app/interfaces/concierto';
import { Lugar } from 'src/app/interfaces/lugar';
import { User } from 'src/app/interfaces/user';
import { ArtistaService } from 'src/app/services/artistas/artista.service';
import { ConciertoService } from 'src/app/services/conciertos/concierto.service';
import { GeneralService } from 'src/app/services/general/general.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  newConcForm!: FormGroup;
  newArtForm!: FormGroup;
  lugares: Lugar[] = [];
  categorias: Categoria[] = [];
  conciertos: Concierto[] = [];
  artistas: Artista[] = [];
  selected: Lugar;
  selectedCat: Categoria;
  selectedCatArt: Categoria;
  selectedArt: Artista;
  administ = '';
  imageNuevo: string;
  filterSearch = '';
  pagActual: number;
  numPaginas: number;
  page = 1;
  pageSize = 10;
  usuario: User;
  image: string;
  alert: Boolean = false;
  id: number;
  concId: any;

  constructor(private generalService: GeneralService, private conciertoService: ConciertoService,
              private artistaService: ArtistaService, private userService: UsuariosService) { }

  ngOnInit(): void {

    this.newConcForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      artista: new FormControl('', [Validators.required]),
      lugar: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
    });

    this.newArtForm = new FormGroup({
      nombre_art: new FormControl('', [Validators.required]),
      fecha_nac: new FormControl('', [Validators.required]),
      pais_nac: new FormControl('', [Validators.required]),
      lugar_nac: new FormControl('', [Validators.required]),
      imgArt: new FormControl('', [Validators.required]),
      catArt: new FormControl('', [Validators.required])
    });

    this.getAllLugaresAndCat();
    this.getAllConciertos();
    this.getAllArtistas();
    this.usuario = JSON.parse(sessionStorage.getItem('user'));
      if(this.usuario.imagen == undefined || this.usuario.imagen == null) {
        this.image = '../../../assets/photos/placeholder.jpeg';
      } else {
        this.image = this.usuario.imagen;
      }
  }

  get nombreField(): any {
    return this.newConcForm.get('nombre');
  }

  get fechaField(): any {
    return this.newConcForm.get('fecha');
  }

  get horaField(): any {
    return this.newConcForm.get('hora');
  }

  get imagenField(): any {
    return this.newConcForm.get('imagen');
  }

  get artistaField(): any {
    return this.newConcForm.get('artista');
  }

  get lugarField(): any {
    return this.newConcForm.get('lugar');
  }

  get categoriaField(): any {
    return this.newConcForm.get('categoria');
  }

  get precioField(): any {
    return this.newConcForm.get('precio');
  }

  get nombreArtField(): any {
    return this.newArtForm.get('nombre_art');
  }

  get fechaNacField(): any {
    return this.newArtForm.get('fecha_nac');
  }

  get paisNacField(): any {
    return this.newArtForm.get('pais_nac');
  }

  get lugarNacField(): any {
    return this.newArtForm.get('lugar_nac');
  }

  get imgArtField(): any {
    return this.newArtForm.get('imgArt');
  }

  get catArtField(): any {
    return this.newArtForm.get('catArt');
  }

  getAllLugaresAndCat() {
    this.generalService.getAllLugares().subscribe(
      lugares => this.lugares = lugares,
      error => console.error(error),
      () => console.log('Lugares cargados')
    );

    this.generalService.getAllCategories().subscribe(
      categorias => this.categorias = categorias,
      error => console.error(error),
      () => console.log('Categorias cargadas')
    );
  }

  getAllConciertos() {
    this.conciertoService.getAll().subscribe(
      conciertos => this.conciertos = conciertos,
      error => console.error(error),
      () => console.log('Conciertos cargados')
    );
  }

  getAllArtistas() {
    this.artistaService.getAll().subscribe(
      artistas => this.artistas = artistas,
      error => console.error(error),
      () => console.log(this.artistas)
    )
  }

  toggleContent(box: string) {
    this.administ = box;
    this.newConcForm.reset();
    this.newArtForm.reset();
  }

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.imageNuevo = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

  newConcFormSubmit() {
    let hora = this.newConcForm.get('hora').value.toString();
    this.id = Number(this.conciertos[this.conciertos.length-1].id);
    this.id++;
    this.concId = this.id;

    let newConcert: Concierto = {
      id: this.id,
      nombre: this.newConcForm.get('nombre').value,
      fecha: this.newConcForm.get('fecha').value,
      hora: hora,
      imagen: this.imageNuevo,
      entradas_vendidas: 0,
      lugar: this.newConcForm.get('lugar').value,
      categoria: this.newConcForm.get('categoria').value,
      precio: this.newConcForm.get('precio').value
    }

    this.conciertoService.anadirConcierto(newConcert).subscribe();
    this.conciertoService.artistaConcierto(this.newConcForm.get('artista').value, this.concId.toString()).subscribe();
    this.newConcForm.reset();
    this.alert = true;
  }

  newArtFormSubmit() {

    let newArtista: Artista = {
      nombre: this.newArtForm.get('nombre_art').value,
      fecha_nacimiento: this.newArtForm.get('fecha_nac').value,
      pais_nacimiento: this.newArtForm.get('lugar_nac').value,
      lugar_nacimiento: this.newArtForm.get('pais_nac').value,
      imagen: this.imageNuevo,
      categoria: this.newArtForm.get('catArt').value
    }

    this.artistaService.anadirArtista(newArtista).subscribe();
    this.newArtForm.reset();
  }

  eliminarConcierto(i: number) {
    this.conciertoService.elimConcierto(i).subscribe((data) =>
      console.log("Concierto eliminado")
    );
  }

  eliminarArtista(i: number) {
    this.artistaService.elimArtista(i).subscribe((data) =>
      console.log("Artista eliminado")
    );
  }

  eliminarDelArray(i: number) {
    this.conciertos.splice(i, 1);
  }

  eliminarDelArtArray(i: number) {
    this.artistas.splice(i, 1);
  }

  public closePopUp() {
    this.alert = false;
  }
}
