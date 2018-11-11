import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
  constructor() { }
  
  @Input('title') title; string;

  private _isCollapsed: boolean = true;

  get isCollapsed() {
    return this._isCollapsed;
  }

  toggleClick() {
    this._isCollapsed = !this._isCollapsed;
  }
}
