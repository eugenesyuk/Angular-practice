import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {
  private _rights: string;

  constructor(private activeRoute: ActivatedRoute) { }

  get rights() {
    return this._rights
  }

  ngOnInit() {
     this._rights = this.activeRoute.snapshot.queryParamMap.get('rights');
  }

}
