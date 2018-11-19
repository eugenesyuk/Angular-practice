import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _title = 'Angular App';

  constructor(private authService: AuthorizationService) { }

  get title() {
    return this._title;
  }

  ngOnInit() {
  }

  get user() {
    return this.authService.user;
  }
}
