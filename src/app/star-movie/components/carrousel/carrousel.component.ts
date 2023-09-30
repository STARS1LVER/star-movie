import { Component, OnInit } from '@angular/core';
import { StarMovieService } from '../../service/star-movie.service';
import { Result } from '../../interfaces/ultimate-movies.interface';

@Component({
  selector: 'star-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  // Propiedades
  public ultimateMovies: Result[] = []


  constructor(
    // Inyectamos el servicio
    private starService: StarMovieService
  ){}

  ngOnInit(): void {
    // Llamamos el servicos para obtener las ultimas peliculas
    this.starService.getUltimateMovies()
    .subscribe(
      response => {
        this.ultimateMovies = response
      }
    )
  }

}
