import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  IMG_PATH: string = 'https://image.tmdb.org/t/p/w1280';
  @Input() movie!: Movie;

  constructor() {}

  ngOnInit(): void {}
}
