import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { FollowersComponent } from './components/followers/followers.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FollowersProfileComponent } from './components/followers-profile/followers-profile.component';
import { AuthorComponent } from './components/author/author.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'followers/:userId', 
    component: FollowersComponent 
  },
  { 
    path: 'followers', 
    component: FollowersComponent 
  },
  { 
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'signup',
    component: SignupFormComponent
  },
  {
    path: 'other',
    component: AuthorComponent
  },
  { 
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
