import { Component, OnInit } from '@angular/core';
import { StarMovieService } from '../../service/star-movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map, tap } from 'rxjs';
import { Info } from '../../interfaces/info-movies.interfaces';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.css'],
})
export class InfoMovieComponent implements OnInit {

  // Propiedades
  public movie?: Info;
  public idMovieI!: number;

  constructor(
    // Inyectamos en el constructor
    private starMovieService: StarMovieService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    // Accedemos a los parametros para capturar el id
    this.activatedRoute.params
      // usamos el tap paran hacer un efecto secundario y asignarle el id a la variable idMovieI
      .pipe( tap(({id}) => this.idMovieI = id  ),
            // por medio de switchMap para trasnformar la respuesta
            switchMap(({ id }) => this.starMovieService.getMovieById(id)), )
      .subscribe((response) => {

        console.log(response)
        // si la respuesta es undefined llevame a la vista de list-movies
        if (!response) return this.route.navigate(['/movie/list-movies']);

        // Asignamos los valores
        this.movie = response;
        this.idMovieI = response.id

        return;
      });
  }


}
