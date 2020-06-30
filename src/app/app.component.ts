import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  myTitle = 'project-angular';
  open = false;

  toggle(event) {
    console.log(event);
    this.open = event.detail;
  }
}
