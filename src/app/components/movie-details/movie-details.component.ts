import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetailsService } from 'src/app/services/movie-details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any = {};
  id!: string;
  IMG_PATH: string = 'https://image.tmdb.org/t/p/w1280';

  constructor(
    private movieDetailsService: MovieDetailsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.loadMovieDetails(this.id);
  }

  loadMovieDetails(id: string) {
    this.movieDetailsService.loadMovieDetails(id).subscribe(res => {
      this.movieDetails = res;
    });
  }
}
