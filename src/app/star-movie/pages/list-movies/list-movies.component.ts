import { Component, OnInit } from '@angular/core';
import { StarMovieService } from '../../service/star-movie.service';
import { ResultM } from '../../interfaces/top-movies.interfaces';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  // Creamos las propiedades
  public listMovies!: ResultM[];

  // propiedad para la page
  public page: number = 1;

  constructor(private starMovieService: StarMovieService) {}

  ngOnInit(): void {
    // Llamamos el metodo
    this.getListMovies(this.page);
  }


  /**
   * Metodo para mostrar la lista de animes
   * @param page De tipo number
   * @returns void no retorna nada
   */
  public getListMovies(page: number) {
    if (page <= 0) return;

    this.page = page;

    this.starMovieService.getListMovies(page).subscribe({
      next: (response) => {
        this.listMovies = response;
      },
      error: () => {
        console.log('Hay un error');
      },
    });
  }
}
