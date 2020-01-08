import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() movies: Movie[];

  details(movie) {
    alert(`more things about the movie: ${movie.title}`);
  }
}
