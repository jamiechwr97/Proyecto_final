import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  newUserForm: FormGroup;
  imageNuevo: string;
  emails: string[] = [];
  users: string[] = [];
  existsEm: boolean = false;
  existsUs: boolean = false;
  alert: boolean = false;

  constructor(private userService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      imagen: new FormControl('', [Validators.required])
    });

    this.userService.checkEmailExists().subscribe(
      (emails: any) => this.emails = emails,
      error => console.error(error),
      () => console.log('Comparando E-mails')
    );

    this.userService.checkUsuario().subscribe(
      (users: any) => this.users = users,
      error => console.error(error),
      () => console.log('Comparando Usuarios')
    );
  }

  get nombreField(): any {
    return this.newUserForm.get('nombre');
  }

  get fechaField(): any {
    return this.newUserForm.get('fecha');
  }

  get paisField(): any {
    return this.newUserForm.get('pais');
  }

  get usuarioField(): any {
    return this.newUserForm.get('usuario');
  }

  get emailField(): any {
    return this.newUserForm.get('email');
  }

  get passwordField(): any {
    return this.newUserForm.get('password');
  }

  get imagenField(): any {
    return this.newUserForm.get('imagen');
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

  newUserFormSubmit() {

    let newUsuario: User = {
      nombre: this.newUserForm.get('nombre').value,
      fecha_nacimiento: this.newUserForm.get('fecha').value,
      pais_nacimiento: this.newUserForm.get('pais').value,
      usuario: this.newUserForm.get('usuario').value,
      correo: this.newUserForm.get('email').value,
      password: this.newUserForm.get('password').value,
      imagen: this.imageNuevo,
      tipo_usuario: 0
    }

    for(let i = 0; i < this.emails.length; i++){

      let e = '{"correo":"'+this.newUserForm.get('email').value+'"}';
      let u = '{"usuario":"'+this.newUserForm.get('usuario').value+'"}';

      if(e === JSON.stringify(this.emails[i]) || u === JSON.stringify(this.users[i])) {
        this.alert = true;

        if (e === JSON.stringify(this.emails[i])) {
          this.existsEm = true;
        } else if(u === JSON.stringify(this.users[i])) {
          this.existsUs = true;
        }

      } else {
        this.alert = false;
      }
    }

    if(this.existsEm === false && this.existsUs === false) {
      this.alert = false;

      this.userService.insertUser(newUsuario).subscribe();
        this.newUserForm.reset();
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(["/home"]);
        });

    } else
    this.alert = true;
  }

  public closePopUp() {
    this.existsEm = false;
    this.existsUs = false;
  }
}
