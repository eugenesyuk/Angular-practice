import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { FollowersComponent } from './components/followers/followers.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorComponent } from './components/author/author.component';
import { LoginComponent } from './components/login/login.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'followers/:userId', 
    component: FollowersComponent ,
    canActivate: [AuthGuard]
  },
  { 
    path: 'followers', 
    component: FollowersComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupFormComponent
  },
  {
    path: 'other',
    component: AuthorComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '**',
    component: NotFoundComponent,
  }, 
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
