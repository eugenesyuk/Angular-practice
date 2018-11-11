import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorService } from './services/author.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { LikeComponent } from './components/like/like.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    SummaryPipe,
    TitleCasePipe,
    LikeComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  private _authors : number;

  get authors() {
    return this._authors;
  }
}
