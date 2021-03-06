import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { LikeClickedEventArgs } from '../like/like.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor(service: AuthorService) {
    this._authors = service.getAuthors();
    if (this._authors) { this._authorCount = this._authors.length; }
  }

  get authors() {
    return this._authors;
  }

  get authorCount() {
    return this._authorCount;
  }

  get email() {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get title() {
    return this._title;
  }

  set title(newtitle: string) {
    this._title = newtitle;
  }
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  _authors;
  _authorCount: number;
  _email = '';
  _name: string;
  _title: string;
  isActive = true;

  post = {
    isFavorite: false
  };

  tweet = {
    body: 'Some text here...',
    likesCount: 0,
    isLiked: false
  };

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

  ngOnInit() {
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Save was clicked' + $event);
  }

  onEnterEmail() {
    console.log('Enter was pressed ' + this._email);
  }

  onEnterName() {
    console.log('Enter was pressed ' + this._name);
  }

  toggleFavorite() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }

  onFavoriteChanged(args: FavoriteChangedEventArgs) {
    console.log(`Favorite changed: ${args.newValue}`);
  }

  onLikeClicked(eventArgs: LikeClickedEventArgs) {
    console.log('Like changed: ' + eventArgs.newValue);
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

