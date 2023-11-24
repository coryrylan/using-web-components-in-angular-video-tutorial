import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'web-component-essentials';

@Component({
  standalone: true,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  myTitle = 'project-angular';
  open = false;

  toggle(event: any) {
    console.log(event);
    this.open = event.detail;
  }
}
