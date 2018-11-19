import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { User } from '../helpers/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private _user: User;
  constructor(private router: Router, private authService: AuthorizationService) {
    this._user = authService.user;
  }

  canActivate() {
    if (this._user && this._user.admin) { return true; }

    this.router.navigate(['access-denied'], {queryParams: {rights: 'admin'}});
    return false;
  }
}
