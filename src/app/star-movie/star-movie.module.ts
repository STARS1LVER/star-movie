import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { InfoMovieComponent } from './pages/info-movie/info-movie.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';
import { SoonMoviesComponent } from './pages/soon-movies/soon-movies.component';
import { TopMoviesComponent } from './pages/top-movies/top-movies.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { StarMovieRoutingModule } from './star-movie-routing.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { MovieImagePipe } from './pipes/movie-image.pipe';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { MovieTextPipe } from './pipes/movie-title.pipe';
import { CarouselSimilarComponent } from './components/carousel-similar/carousel-similar.component';
import { CastingMovieComponent } from './components/casting-movie/casting-movie.component';
import { MovieDesciptionPipe } from './pipes/movie-description.pipe';
import { CardTopComponent } from './components/card-top/card-top.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieImageCarrouselPipe } from './pipes/movie-image-carrousel.pipe';
import { InfoActorComponent } from './pages/info-actor/info-actor.component';
import { MovieBiographyPipe } from './pipes/movie-biography.pipe';



@NgModule({
  declarations: [
    ListMoviesComponent,
    InfoMovieComponent,
    SearchMoviesComponent,
    SoonMoviesComponent,
    TopMoviesComponent,
    LayoutPageComponent,
    CarrouselComponent,
    MovieImagePipe,
    CardMovieComponent,
    MovieTextPipe,
    CarouselSimilarComponent,
    CastingMovieComponent,
    MovieDesciptionPipe,
    CardTopComponent,
    MovieImageCarrouselPipe,
    InfoActorComponent,
    MovieBiographyPipe

  ],
  imports: [
    CommonModule,
    StarMovieRoutingModule,
    ReactiveFormsModule

  ]
})
export class StarMovieModule { }
