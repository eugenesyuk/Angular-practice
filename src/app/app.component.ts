import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './author/author.component'
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

  onFavoriteChanged(args: FavoriteChangedEventArgs) {
    console.log(`Favorite changed: ${args}`);
  }
}
