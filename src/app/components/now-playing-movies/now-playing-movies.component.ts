import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss'],
})
export class NowPlayingMoviesComponent implements OnInit {
  moviesData: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies('now_playing', 1);
  }

  loadMovies(param: string, page: number) {
    this.moviesService.loadMovies(param, page).subscribe(res => {
      this.moviesData = res.results;
    });
  }
}
