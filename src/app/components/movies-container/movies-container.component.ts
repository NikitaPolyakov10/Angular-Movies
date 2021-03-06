import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent implements OnInit {
  moviesData: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies('popular', 1);
  }

  loadMovies(param: string, page: number) {
    this.moviesService.loadMovies(param, page).subscribe(res => {
      this.moviesData = res.results;
    });
  }
}
