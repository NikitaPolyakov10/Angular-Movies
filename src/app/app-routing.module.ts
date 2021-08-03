import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { NowPlayingMoviesComponent } from './components/now-playing-movies/now-playing-movies.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';

const routes: Routes = [
  { path: '', component: MoviesContainerComponent },
  { path: 'movies', component: MoviesContainerComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'top_rated', component: TopRatedMoviesComponent },
  { path: 'upcoming', component: UpcomingMoviesComponent },
  { path: 'now_playing', component: NowPlayingMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
