import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StarMovieService } from '../../service/star-movie.service';
import { ResultS, Similar } from '../../interfaces/similar-movies.interfaces';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'star-carousel-similar',
  templateUrl: './carousel-similar.component.html',
  styleUrls: ['./carousel-similar.component.css']
})
export class CarouselSimilarComponent implements OnInit {

  // Recibimos informacion del padre por medio de este Input
  @Input()
  public idMovie!: number;

  // propiedades
  public moviesSimilar!: ResultS[]
  private recargaRealizada = false;

  constructor(
    // Inyectamos en el constructor
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private starMoviesService: StarMovieService
     ){}

  ngOnInit(): void {
    // Inicializamos el metodo
    this.getSimilarMovies(this.idMovie)
  }



  /**
   * obtener las peloculas similares por medio del id
   * @param id tipo number
   * returns void
   */
  public getSimilarMovies(id: number){
    // Llamamos el servicio y llamamos al metodo getSimilar y le pasamos el id
    this.starMoviesService.getSimilarMovies(id)
    .subscribe({
      next: (response) => {
        // le asignamos a la variable la respuesta
        this.moviesSimilar = response
      },
      error: () => {
        console.log('Hay un error')
      }
    })
  }


  /**
   * nos permite ir la pagina info de la pelicula
   * @param id number
   * @returns void
   */
  public reloadAndNextMovie(id: number): void{
    this.route.navigate(['/movie/info',id])

    this.getSimilarMovies(id)

  }

}
