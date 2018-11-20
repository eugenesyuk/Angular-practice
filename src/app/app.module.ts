import { AppErrorHandler } from './errors/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorService } from './services/author.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { LikeComponent } from './components/like/like.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { PasswordChangeFormComponent } from './components/password-change-form/password-change-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowersService } from './services/followers.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FollowersProfileComponent } from './components/followers-profile/followers-profile.component';
import { LoginComponent } from './components/login/login.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminGuard } from './services/admin-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { FirebaseFollowersComponent } from './components/firebase-followers/firebase-followers.component';
import { FirebasePostsComponent } from './components/firebase-posts/firebase-posts.component';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AccessDeniedComponent,
    AppComponent,
    AuthorComponent,
    SummaryPipe,
    TitleCasePipe,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    PasswordChangeFormComponent,
    PostsComponent,
    FollowersComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    FollowersProfileComponent,
    LoginComponent,
    SignupFormComponent,
    FirebaseFollowersComponent,
    FirebasePostsComponent,
    ReversePipe
  ],
  imports: [
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    AuthorService,
    PostService,
    FollowersService,
    AuthGuard,
    AdminGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private _authors: number;

  get authors() {
    return this._authors;
  }
}
