import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
})
export class MoviesSearchComponent implements OnInit {
  moviesList: Movie[];

  constructor() { }

  @Output('sendTerm') sendTermEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  sendTerm(term: string) {
    this.sendTermEmitter.emit(term);
  }
}
