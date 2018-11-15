import { AppErrorHandler } from './errors/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, BaseRequestOptions } from '@angular/http';

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
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { PasswordChangeFormComponent } from './components/password-change-form/password-change-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowersService } from './services/followers.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FollowersProfileComponent } from './components/followers-profile/followers-profile.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    SummaryPipe,
    TitleCasePipe,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    PasswordChangeFormComponent,
    PostsComponent,
    FollowersComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    FollowersProfileComponent
  ],
  imports: [
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthorService,
    PostService,
    FollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },

    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  private _authors : number;

  get authors() {
    return this._authors;
  }
}
