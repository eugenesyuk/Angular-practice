import { AppError } from './../../errors/app-error';
import { BadRequestError } from './../../errors/bad-request-error';
import { Component, OnInit, Optional } from '@angular/core';
import { FollowersService } from 'src/app/services/followers.service';
import { NotFoundError } from 'src/app/errors/not-forund-error';
import { ForbiddenError } from 'src/app/errors/forbidden-error';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'firebase-followers',
  templateUrl: './firebase-followers.component.html',
  styleUrls: ['./firebase-followers.component.scss']
})
export class FirebaseFollowersComponent implements OnInit {
  private _pageStep = 10;
  private _currentPage = 1;
  private _followers: Array<any>;
  private _pageFollowers: Array<any>;
  private _pages = 1;

  constructor(private route: ActivatedRoute, private router: Router, private fb: AngularFireDatabase) { }

  ngOnInit() {
    console.log('Firebase followers');

    this.fb.list(environment.endpoints.FOLLOWERS.GET).valueChanges().pipe(
    switchMap(
      res => {
        this._followers = res;
        this._pages = Math.ceil(this._followers.length / 10);

        return this.route.queryParams;
      }
    ))
    .subscribe( res => {
      res.page < 1 ? this._currentPage = 1 : null;
      res.page > this._pages ? this._currentPage = this._pages : null;

      // this._currentPage = res.page;
      this._pageFollowers = this.getPageFollowers();
    });
  }

  get followers() {
    return this._followers;
  }

  get pageFollowers() {
    return this._pageFollowers;
  }

  get currentPage() {
    return this._currentPage;
  }

  get pages() {
    return this._pages;
  }

  private getPageFollowers() {
    return this._followers.slice( (this._currentPage - 1) * this._pageStep, (this._currentPage * this._pageStep) - 1);
  }

  public navigatePrev() {
    this.router.navigate(['/followers'], {
      queryParams: { page: --this._currentPage }
    });
  }

  public navigateNext() {
    this.router.navigate(['/followers'], {
      queryParams: { page: ++this._currentPage }
    });
  }

  public handleErrors(error: any) {
    if (error instanceof BadRequestError) { alert('Bad request 400'); } else if (error instanceof ForbiddenError) { alert('Access forbiden 403'); } else if (error instanceof NotFoundError) { alert('Not found 404 error'); } else { throw AppError; }
  }
}
