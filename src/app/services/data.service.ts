import { BadRequestError } from '../errors/bad-request-error';
import { NotFoundError } from '../errors/not-forund-error';
import { AppError } from '../errors/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs/';
import { ForbiddenError } from '../errors/forbidden-error';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor(private _url: string, private http: Http) { }

  getAll() {
    return this.http.get(this._url)
    .pipe(
      map( response => response.json()),
      catchError(this.handleErors)
    );
  }

  createItem(resource: object) {
    return this.http.post(this._url, JSON.stringify(resource))
    .pipe(
      map( response => response.json()),
      catchError(this.handleErors)
    );
  }

  updateItem(id: number) {
    return this.http.patch(this._url + "/" + id , JSON.stringify({ isRead: true }))
    .pipe(
      map( response => response.json()),
      catchError(this.handleErors)
    );
  }

  deleteItem(id: number) {
    return this.http.delete(this._url + "/" + id)
    .pipe(
      map( response => response.json()),
      catchError(this.handleErors)
    );
  }

  private handleErors(error: Response) {
    if(error.status == 404)
          return throwError(new NotFoundError());
    if(error.status == 403)
          return throwError(new ForbiddenError);
    if(error.status == 400)
          return throwError(new BadRequestError(error));
    return throwError(new AppError(error));
  }
}
