import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  route: string;

  constructor(location: Location, private router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
        console.log(this.route);
      } else {
        this.route = "Home";
      }
    });

    this.refresh();
  }

  ngOnInit(): void {
  }

  refresh() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
