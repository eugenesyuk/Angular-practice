import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'firebase-posts',
  templateUrl: './firebase-posts.component.html',
  styleUrls: ['./firebase-posts.component.scss']
})
export class FirebasePostsComponent {
  private postsUrl = environment.endpoints.POSTS.GET;
  postsRef$: AngularFireList<any>;
  posts$: Observable<any>;

  constructor(private fb: AngularFireDatabase) {
    this.postsRef$ = this.fb.list(this.postsUrl);
    this.posts$ = this.postsRef$.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }));
      })
    );
  }

  public createPost(input: HTMLInputElement) {
    const post = {
      title: input.value
    };
    input.value = '';
    this.postsRef$.push(post);
  }

  private updatePost(post) {
    this.postsRef$.update(post.key, { title: 'Updated' });
  }

  private deletePost(post) {
    this.postsRef$.remove(post.key);
  }
}

