import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  private _authorCount: number
  private _authors

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
}
