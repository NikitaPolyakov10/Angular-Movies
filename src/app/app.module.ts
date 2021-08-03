import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { NowPlayingMoviesComponent } from './components/now-playing-movies/now-playing-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesContainerComponent,
    MovieDetailsComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent,
    NowPlayingMoviesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
