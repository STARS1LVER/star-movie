import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';
import { SoonMoviesComponent } from './pages/soon-movies/soon-movies.component';
import { TopMoviesComponent } from './pages/top-movies/top-movies.component';
import { InfoMovieComponent } from './pages/info-movie/info-movie.component';
import { InfoActorComponent } from './pages/info-actor/info-actor.component';


// Configuracion de las rutas
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'list-movies', component: ListMoviesComponent },
      { path: 'search-movies', component: SearchMoviesComponent },
      { path: 'soon-movies', component: SoonMoviesComponent },
      { path: 'top-movies', component: TopMoviesComponent },
      { path: 'info/:id', component: InfoMovieComponent },
      { path: 'actor/:id', component: InfoActorComponent },
      { path: '**', redirectTo: 'list-movies' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [ RouterModule ],
})
export class StarMovieRoutingModule {}
