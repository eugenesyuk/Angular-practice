import { AppError } from './../../errors/app-error';
import { BadRequestError } from './../../errors/bad-request-error';
import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/app/services/followers.service';
import { NotFoundError } from 'src/app/errors/not-forund-error';
import { ForbiddenError } from 'src/app/errors/forbidden-error';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  private _pageStep: number = 10;
  private _currentPage: number;
  private _followers: Array<any>;
  private _pageFollowers: Array<any>;
  private _pages: number = 1;

  constructor(private route: ActivatedRoute, private service: FollowersService) { }

  ngOnInit() {
    

    this.service.getAll()
    
    .subscribe(
      res => {
        this._followers = res;
        this._pages = Math.ceil(this._followers.length / 10);

        this.route.queryParams
        .subscribe( res => {
          this._currentPage = res.page;
          this._pageFollowers = this.getPageFollowers();
        });
      }
    );

    /* 
      // The same combined in one Obsevable
      combineLatest(
        this.service.getAll(),
        this.route.queryParams
      )
      .subscribe( 
        res => {
          this._followers = res[0];
          this._currentPage = res[1].page;
          this._pages = Math.ceil(this._followers.length / 10);
          this._pageFollowers = this.getPageFollowers();
        },
        this.handleErrors
      ); 
    */
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

  private handleErrors(error: any) {
    if (error instanceof BadRequestError) { alert('Bad request 400'); }
    else if(error instanceof ForbiddenError) { alert('Access forbiden 403'); }
    else if(error instanceof NotFoundError) { alert('Not found 404 error'); }
    else throw AppError;
  }
}
