import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesServise } from './services/courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './services/author.service';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CoursesServise,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
