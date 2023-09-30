import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StarMovieService } from '../../service/star-movie.service';
import { Cast } from '../../interfaces/casting-movies.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'star-casting-movie',
  templateUrl: './casting-movie.component.html',
  styleUrls: ['./casting-movie.component.css']
})
export class CastingMovieComponent implements OnInit, OnChanges {

  // Recibimos informacion del padre por medio de este Input
  @Input() public idMovieC!: number

  // propiedades:
  public castingMovies!: Cast []
  public reload: boolean = false

  constructor(
    // Inyectamos en el constructor
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private starMovieService: StarMovieService
  ){

  }


  ngOnInit(): void {
    // inicializamos el metodo o lo llamamos
    this.getCastiongMovie(this.idMovieC)
  }


  ngOnChanges(changes: SimpleChanges){
    // detectamos el cambio y llamamos el metodo;  en este caso ( changes )
    this.getCastiongMovie(this.idMovieC)


  }

  /**
   * Obtenemos el casting de la pelicula por medio del id
   * @param id type number
   */
  public getCastiongMovie(id:number){
    this.starMovieService.getCastingToMovie(id)
    .subscribe({
      next: (response) => {
        // Verificamos que id llega
        console.log(id)
        console.log(this.idMovieC)

        // le asignamos a la variable castingMovies la respuesta
        this.castingMovies = response

      },
      error: () =>{
        console.log('Hay un error')
      }
    })
  }



}
