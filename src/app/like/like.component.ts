import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input('likesCount') _likeCount: number;
  @Input('isActive') _isSelected: boolean;
  @Output('change') _likeClick = new EventEmitter();

  get likeCount() {
    return this._likeCount;
  }

  get isSelected() {
    return this._isSelected;
  }

  constructor() { }

  onLikeClick() {
    this._isSelected = !this._isSelected;
    this._isSelected ? this._likeCount++ : this._likeCount--;

    this._likeClick.emit({ newValue: this._isSelected});
  }
}

export interface LikeClickedEventArgs {
  newValue: boolean;
}
