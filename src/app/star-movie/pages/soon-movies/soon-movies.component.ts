import { Component, OnInit } from '@angular/core';
import { StarMovieService } from '../../service/star-movie.service';
import { ResultP } from '../../interfaces/soon-movies.interface';

@Component({
  selector: 'app-soon-movies',
  templateUrl: './soon-movies.component.html',
  styleUrls: ['./soon-movies.component.css']
})
export class SoonMoviesComponent implements OnInit {

  // Propiedade
  public listSoonMovies!: ResultP[]

  constructor(
    // Inyectamos en el constructor
    private starMovieService: StarMovieService
  ){}


  ngOnInit(): void {
    // llamamos el metodo
    this.getSoonMovies()
  }


  /**
   * Obtenemos las peliculas
   * las proximas peliculas
   */
  public getSoonMovies( ){
    this.starMovieService.getSoonMovies()
    .subscribe({
      next: (response) => {
        this.listSoonMovies = response
      },
      error: () => {
        console.log('Hay un error')
      }
    })


  }



}
