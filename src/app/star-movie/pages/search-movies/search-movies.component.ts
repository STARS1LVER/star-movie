import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StarMovieService } from '../../service/star-movie.service';
import { ResultM } from '../../interfaces/top-movies.interfaces';


@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {

  // Formularios reactivos
  public myForm: FormGroup = this.formB.group({
    name: ['',[Validators.required]]
  })

  // Propiedades
  public pagesSearch: number = 1;
  public moviesSearch!: ResultM[]

  // Inyectamos en el constructor
  constructor(
    private formB: FormBuilder,
    private starMovieService: StarMovieService
  ){}


  /**
   * Metodo on submit del formulario
   * @returns void
   */
  public onSubmitForm(): void {

    // No hagas nada si esta invalidado
    if(this.myForm.invalid) return

    /**
     * llamamos al metodo para poder pasarles sus respectivos parametros
     */
    this.starMovieService.getMovieBySearch(this.myForm.controls['name'].value, this.pagesSearch)
    .subscribe({
      next: (response) => {
        // asignamos su respectivo valor
        this.moviesSearch = response

      }
    })

  }


  /**
   * Metodo para pasar es paginator de la vista de busqueda de peliculas
   * @param page
   * @returns
   */
  public getSearchMoviesList(page: number){

    // si es menor o igual a 0 no hagas nada
    if( page <= 0 ) return


    this.pagesSearch = page

    // volvemos a llamar el metodo para mostrar las siguientes peliculas
    this.starMovieService.getMovieBySearch(this.myForm.controls['name'].value, page)
    .subscribe({
      next: (response) => {
        this.moviesSearch = response

      },
      error: () => {
        console.log('Hay un error')
      }
    })
  }




}
