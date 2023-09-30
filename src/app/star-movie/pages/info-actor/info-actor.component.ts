import { Component, OnInit } from '@angular/core';
import { Actor } from '../../interfaces/actor-movies.interface';
import { StarMovieService } from '../../service/star-movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ResultS } from '../../interfaces/similar-movies.interfaces';

@Component({
  selector: 'app-info-actor',
  templateUrl: './info-actor.component.html',
  styleUrls: ['./info-actor.component.css']
})
export class InfoActorComponent implements OnInit {

  // Propiedades:
  public getInfoActor!: Actor

  public getCreditsActor!: ResultS[]

  constructor(
    // Inyectamos en el constructor
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private starMovieService: StarMovieService
    ){}


  ngOnInit(): void {
    // llamamos el activated y accedemos al params
    this.activatedRoute.params
    .pipe(
      // Llamamos el operador de switchMap para para la suscripcion
      // y accedemos al id y llamamos al metodo para obtener el info del actor
      switchMap(({id}) => this.starMovieService.getInfoActor(id))
      )
      // Nos suscribimos
      .subscribe({
        next: (response) => {
          // a la variable le asignamos la respuesta
          this.getInfoActor = response
          // y llamamos al metodo y le pasamos el id
          this.getInfoActorMethod(this.getInfoActor.id)
        },
        error: () => {
          console.log('Hay un error ')
        }
    })


  }

  /**
   * este metodo nos devuelve la info del actor por medio del id
   * @param id tipo number
   */
  public getInfoActorMethod(id: number){
    this.starMovieService.getCreditsActor(id)
    .subscribe({
      next:(response) => {
        this.getCreditsActor = response
      }
    })

  }



}
