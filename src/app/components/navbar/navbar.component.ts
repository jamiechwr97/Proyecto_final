import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  route: string;
  loginForm!: FormGroup;
  user: User;
  image?: string;

  constructor(location: Location, private router: Router, private userService:UsuariosService) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "Home";
      }
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    })

    this.refresh();
  }

  get emailField(): any {
    return this.loginForm.get('email');
  }

  get passwordField(): any {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    /*let usuario = this.userService.checkUserExist();
    if(usuario) {
      sessionStorage.setItem('user', JSON.stringify(this.user));
    } else if(!usuario || usuario == 'Invitado') {
      sessionStorage.setItem('user', JSON.stringify({user: 'Invitado'}));
    }*/
      let u = JSON.parse(sessionStorage.getItem('user')!);

      if(u){
        this.user = u;
        this.userService.setUser(u);
      }
  }

  loginFormSubmit() {
    this.user = null;
    sessionStorage.removeItem('user');
    sessionStorage.clear();

    this.userService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe((res: any) => {
      let u = JSON.parse(sessionStorage.getItem('user'));

        if(u) {
          this.user = u;
          this.userService.setUser(u);
          console.log(this.user);
        }
        else {
          sessionStorage.removeItem('user');
          sessionStorage.setItem('user',JSON.stringify(res[0]));
          this.user = res[0];
          this.userService.setUser(this.user);

          if(this.user.imagen == undefined || this.user.imagen == null) {
            this.image = '../../../assets/photos/placeholder.jpeg';
          } else {
            this.image = this.user.imagen;
          }

          document.getElementById("login")!.setAttribute('data-bs-dismiss',"modal");
          document.getElementById("login")!.click();
          this.loginForm.reset();
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
          });
        };
    },
    error => {alert("Error al acceder, pruebe de nuevo.")}
    );
  }

  closeLogin(): void {
    this.loginForm.reset();
  }

  logout() {
    this.user = null;
    sessionStorage.removeItem('user');
    sessionStorage.clear();
    this.userService.setUser(this.user);
    this.image = null;
    let currentUrl = this.router.url;

    if(currentUrl.includes("/home")) {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(["/home"]);
      });
    }
    else{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    }
  }

  refresh() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
