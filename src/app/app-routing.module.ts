import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/**
 * Rutas:
 * usamos el lazy loading para cargar el modulo
 */
const routes: Routes = [
  {
    path: 'movie',
    loadChildren: () => import('./star-movie/star-movie.module').then( modulo => modulo.StarMovieModule)
  },
  
  {
    path: '**',
    redirectTo: 'movie'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
