import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[];

  constructor(
    private MoviesService: MoviesService
  ) { }

  ngOnInit() {}

  search(term: string) {
    this.MoviesService.searchMoviesList(term)
      .subscribe(moviesList => this.moviesList = moviesList);
  }
}
