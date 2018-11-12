import { AppError } from './../../errors/app-error';
import { BadRequestError } from './../../errors/bad-request-error';
import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/app/services/followers.service';
import { NotFoundError } from 'src/app/errors/not-forund-error';
import { ForbiddenError } from 'src/app/errors/forbidden-error';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  private _followers: any;

  constructor(private service: FollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        resp => this._followers = resp,
        this.handleErrors,
        function() { console.log('Followers loaded successfully '); }
      );

    console.log(this._followers);
  }

  get followers() {
    return this._followers;
  }

  private handleErrors(error: any) {
    if (error instanceof BadRequestError) { alert('Bad request 400'); }
    else if(error instanceof ForbiddenError) { alert('Access forbiden 403'); }
    else if(error instanceof NotFoundError) { alert('Not found 404 error'); }
    else throw AppError;
  }
}
