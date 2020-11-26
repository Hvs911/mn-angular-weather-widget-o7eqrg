import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
  bg = 'bg1';

  bg1() {
    this.bg = 'bg1';
  }

  bg2() {
    this.bg = 'bg2';
  }

  bg3() {
    this.bg = 'bg3';
  }
}
