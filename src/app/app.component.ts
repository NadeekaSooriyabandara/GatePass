import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  login: boolean = true;
  goMenu: boolean = false;
  showDetail: boolean = false;

  constructor() {
  }

  goMenuFunction(event) {
    this.goMenu = event;
    this.login = !event;
  }

  showDetailFunction(event) {
    this.showDetail = event;
    this.goMenu = !event;
  }
}
