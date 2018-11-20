import { BadRequestError } from '../../errors/bad-request-error';
import { NotFoundError } from '../../errors/not-forund-error';
import { AppError } from '../../errors/app-error';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'firebase-posts',
  templateUrl: './firebase-posts.component.html',
  styleUrls: ['./firebase-posts.component.scss']
})
export class FirebasePostsComponent implements OnInit, OnDestroy {
  private _posts: any;
  private subscription: Subscription;

  constructor(private fb: AngularFireDatabase) {
  }

  ngOnInit() {
    this.fb.list(environment.endpoints.POSTS.GET).valueChanges()
    .subscribe( resp => this._posts = resp, this.handleErrors, () => console.log('Posts loaded successfully'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get posts() {
    return this._posts;
  }

  public createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this._posts.splice(0, 0, post);

    // this.service.createItem(post)
    // .subscribe(
    //   resp => {
    //     post['id'] = resp.id;
    //   },  
    //   (error: AppError) => {
    //     this.handleErrors(error, () => this._posts.splice(0, 1));
    //   },
    //   () => console.log('Post created successfully')
    // );
  }

  private updatePost(post) {
    // this.service.updateItem(post.id)
    // .subscribe(
    //   resp => { console.log(resp); },
    //   this.handleErrors,
    //   () => console.log('Post updated successfully')
    // );
  }

  private deletePost(post) {
    const index = this._posts.indexOf(post);
    this._posts.splice(index, 1);

    // this.service.deleteItem(post.id)
    // .subscribe(
    //   null,
    //   (error: AppError) => {
    //     this.handleErrors(error, () => this._posts.splice(index, 0, post));
    //   },
    //   () => console.log('Post deleted successfully')
    // );
  }

  private handleErrors(error: AppError, callback?: Function) {
    callback();

    if (error instanceof BadRequestError) {
      alert('Bad request');
    } else if (error instanceof NotFoundError) {
      alert('This post already been deleted.');
    } else { throw error; }
  }
}

