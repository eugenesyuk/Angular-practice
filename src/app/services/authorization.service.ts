import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Endpoint, FakeLoginEndpoint } from '../helpers/environment';
import { environment } from '../../environments/environment';
import { User } from '../helpers/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements OnInit {
  private _apiUrl: string;
  private _endpoint: Endpoint;
  private _fakeEndpoint: FakeLoginEndpoint;

  constructor(private http: Http) {
    this._apiUrl = environment.apiUrl;
    this._endpoint = environment.endpoints.TOKEN;
    this._fakeEndpoint = environment.endpoints.FAKELOGIN;
  }

  ngOnInit() {}

  login(credentials) {
    return this._makeFakeLoginRequest(credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');

    if (!token) { return false; }

    const jwt = new JwtHelperService;
    const expiration = jwt.decodeToken(token);
    const isExpired = jwt.isTokenExpired(token);

    return true;
  }

  get user() {
    const token = localStorage.getItem('token');
    if (!token) { return null; }

    return new JwtHelperService().decodeToken(token) as User;
  }

  private _makeFakeLoginRequest(credentials) {
    console.log(credentials);
    const username: string = credentials.username;
    const password: string = credentials.password;

    if (!(username === this._fakeEndpoint.USERNAME && password === this._fakeEndpoint.PASSWORD)) {
    return this.http.get(this._apiUrl + this._fakeEndpoint.GET)
      .pipe(
        map ( resp => this._processLogin(resp) )
      );
    }
    return this.http.get(this._apiUrl + this._endpoint.GET)
      .pipe(
        map ( resp => this._processLogin(resp) )
      );
  }

  private _postLoginRequest(credentials) {
    return this.http.post(this._apiUrl + this._endpoint.POST,
      JSON.stringify(credentials))
      .pipe(
        map ( resp => this._processLogin(resp) )
      );
  }

  private _processLogin (resp) {
    const result = resp.json();
    if (result && result['token']) {
      localStorage.setItem('token', result['token']);
      return true;
    } else { return false; }
  }
}
