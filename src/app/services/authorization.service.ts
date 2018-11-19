import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements OnInit{
  constructor(private http: Http) {
  }

  ngOnInit() {}

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .pipe(
        map ( resp => this.processLogin(resp) )
      )
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    const token = localStorage.getItem('token');

    if (!token) return false;

    const jwt = new JwtHelperService;
    const expiration = jwt.decodeToken(token);
    const isExpired = jwt.isTokenExpired(token);
    
    return true;
  }

  get user() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    return new JwtHelperService().decodeToken(token)
  }

  private processLogin (resp) {
    const result = resp.json();
    if (result && result['token']) {
      localStorage.setItem('token', result['token']);
      return true
    }
    else return false 
  }
}
