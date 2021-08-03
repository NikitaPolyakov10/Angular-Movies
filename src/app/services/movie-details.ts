import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//api key d9adebc9c7c79afb794e0b1ace9395ff
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=d9adebc9c7c79afb794e0b1ace9395ff&language=en-US
export class MovieDetailsService {
  constructor(private http: HttpClient) {}

  loadMovieDetails(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d9adebc9c7c79afb794e0b1ace9395ff&language=en-US`
    );
  }
}
