import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-refresh';
  message = 'did this work?';
  watched = [
    new Movie("The Rise of Skywalker", 2019, "action"),
    new Movie("Little Women", 2019, "drama")
  ];

  toWatch = [
    new Movie("Bombshell", 2019, "drama"),
    new Movie("1917", 2019, "action")
  ];
}
