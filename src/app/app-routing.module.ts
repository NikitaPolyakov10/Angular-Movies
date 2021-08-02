import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';

const routes: Routes = [{ path: '', component: MoviesContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
