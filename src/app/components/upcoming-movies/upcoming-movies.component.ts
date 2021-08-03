import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss'],
})
export class UpcomingMoviesComponent implements OnInit {
  moviesData: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies('upcoming', 1);
  }

  loadMovies(param: string, page: number) {
    this.moviesService.loadMovies(param, page).subscribe(res => {
      this.moviesData = res.results;
    });
  }
}
