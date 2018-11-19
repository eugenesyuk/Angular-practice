import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }
  ngOnInit() {
  }

  get userLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
