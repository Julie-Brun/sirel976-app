import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, map } from 'rxjs';
import { Movie } from './movie'
import { MovieApi } from './movieApi';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  searchMoviesList(term: string): Observable<Movie[]> {
    if(term.length <= 1) {
      return of([]);
    } 

    return this.http.get<MovieApi[]>(`https://api.tvmaze.com/search/shows?q=${term}`).pipe(
      map((movieList: MovieApi[]) => { 
        return movieListApiToMovieList(movieList); 
      }),
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}

export const movieListApiToMovieList = (movieListApi: MovieApi[]): 
  Movie[] => { 
   return movieListApi.map(movieListApi => ({ 
     name: movieListApi.show.name, 
     image: movieListApi.show.image?.medium 
   })); 
};