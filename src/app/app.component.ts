import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <bootstrap-navbar></bootstrap-navbar>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
}
