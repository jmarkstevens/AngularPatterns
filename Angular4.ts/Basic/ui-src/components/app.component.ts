import {Component} from '@angular/core';

const appTitle = 'Hello Angular 2 ts World';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = appTitle
}
