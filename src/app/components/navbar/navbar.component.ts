import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  route: string;
  loginForm!: FormGroup;

  constructor(location: Location, private router: Router) {
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
  }

  loginFormSubmit() {

  }

  closeLogin(): void {
    this.loginForm.reset();
  }

  refresh() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
