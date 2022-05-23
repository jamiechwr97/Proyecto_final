import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  editUserForm: FormGroup;
  image: string;
  imageNuevo: string;
  user: User;
  edit: Boolean = false;

  constructor(private userService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    let u = JSON.parse(sessionStorage.getItem('user')!);
    this.user = u;

    if(this.user.imagen === null) {
      this.image = '../../../assets/photos/placeholder.jpeg';
    } else {
      this.image = this.user.imagen;
    }

    this.editUserForm = new FormGroup({
      nombre: new FormControl(this.user.nombre, [Validators.required]),
      fecha: new FormControl(this.user.fecha_nacimiento, [Validators.required]),
      pais: new FormControl(this.user.pais_nacimiento, [Validators.required]),
      usuario: new FormControl(this.user.usuario, [Validators.required]),
      email: new FormControl(this.user.correo, [Validators.required, Validators.email]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
      imagen: new FormControl('', [Validators.required])
    });
  }

  mostrarEdit() {
    if(this.edit === false) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  get nombreField(): any {
    return this.editUserForm.get('nombre');
  }

  get fechaField(): any {
    return this.editUserForm.get('fecha');
  }

  get paisField(): any {
    return this.editUserForm.get('pais');
  }

  get usuarioField(): any {
    return this.editUserForm.get('usuario');
  }

  get emailField(): any {
    return this.editUserForm.get('email');
  }

  get passwordField(): any {
    return this.editUserForm.get('password');
  }

  get imagenField(): any {
    return this.editUserForm.get('imagen');
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

  editUserFormSubmit() {
    let newUsuario: User = {
      id: this.user.id,
      nombre: this.editUserForm.get('nombre').value,
      fecha_nacimiento: this.editUserForm.get('fecha').value,
      pais_nacimiento: this.editUserForm.get('pais').value,
      usuario: this.editUserForm.get('usuario').value,
      correo: this.editUserForm.get('email').value,
      password: this.editUserForm.get('password').value,
      imagen: this.imageNuevo,
      tipo_usuario: this.user.tipo_usuario
    }

    this.userService.updateUser(newUsuario);

    if(confirm("Es necesario que cierres sesión para que se puedan realizar los cambios en tu cuenta.")) {
        this.router.navigate(['/home']);
    }
  }

}
