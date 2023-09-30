import { Component, OnInit } from '@angular/core';
import { StarMovieService } from '../../service/star-movie.service';
import { ResultList } from '../../interfaces/list-movies.interfaces';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {

  // Propiedades
  public topMovies!: ResultList[]

  public page: number = 1;

  // Inyectamos el metodo
  constructor(private starMovieService: StarMovieService){}


  ngOnInit(): void {
    // Llamamos el metodo apenas se crea el componente
    this.getTopMoviesList(this.page)

  }


  /**
   * Nos permite actualizar la pagina de la lista de top movoes
   * @param page tipo number
   * @returns void
   */
  public getTopMoviesList(page: number){

    // si es menor o igual a 0 no hagas nada
    if( page <= 0 ) return
    
    this.page = page

    this.starMovieService.getTopRatingMovies(page)
    .subscribe({
      next:(response) => {
        this.topMovies = response
      },
      error: () => {
        console.log('Hay un error')
      }

    })
  }

}
