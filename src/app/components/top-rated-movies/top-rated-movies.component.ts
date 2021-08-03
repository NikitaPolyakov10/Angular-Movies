import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit {
  moviesData: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies('top_rated', 1);
  }

  loadMovies(param: string, page: number) {
    this.moviesService.loadMovies(param, page).subscribe(res => {
      this.moviesData = res.results;
    });
  }
}
