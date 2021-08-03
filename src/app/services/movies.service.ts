import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})

//api key d9adebc9c7c79afb794e0b1ace9395ff
//https://api.themoviedb.org/3/movie/popular?api_key=d9adebc9c7c79afb794e0b1ace9395ff&language=en-US&page=1
export class MoviesService {
  constructor(private http: HttpClient) {}

  loadMovies(param: string, page: number) {
    return this.http.get<Data>(
      `https://api.themoviedb.org/3/movie/${param}?api_key=d9adebc9c7c79afb794e0b1ace9395ff&language=en-US&page=${page}`
    );
  }
}
