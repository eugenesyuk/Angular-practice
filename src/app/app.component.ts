import { LikeClickedEventArgs } from './components/like/like.component';
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './components/author/author.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular app';

  post = {
    isFavorite: false
  }

  tweet = {
    body: 'Some text here...',
    likesCount: 0,
    isLiked: false
  }

  onFavoriteChanged(args: FavoriteChangedEventArgs) {
    console.log(`Favorite changed: ${args.newValue}`);
  }

  onLikeClicked(eventArgs: LikeClickedEventArgs) {
    console.log('Like changed: '+ eventArgs.newValue);
  }
}
