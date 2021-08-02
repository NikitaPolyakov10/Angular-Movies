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
  page: number = 1;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies(this.page);
  }

  loadMovies(page: number) {
    this.moviesService.loadMovies(page).subscribe(res => {
      this.moviesData = res.results;
    });
  }

  nextPage() {
    this.page += 1;
  }
}
