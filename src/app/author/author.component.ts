import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  private _authorCount: number;
  private _authors;
  private _email: string = '';
  private _name: string;
  private isActive = true;

  constructor(service: AuthorService) {
    this._authors = service.getAuthors();
    this._authorCount = this._authors.length
  }

  ngOnInit() {
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

  onSave($event) {
    $event.stopPropagation();
    console.log('Save was clicked' + $event);
  }

  onDivClick($event) {
    console.log('Div was clicked');
  }

  onEnterEmail(email) {
    console.log('Enter was pressed ' + this._email);
  }

  onEnterName(name) {
    console.log('Enter was pressed ' + this._name);
  }
}
