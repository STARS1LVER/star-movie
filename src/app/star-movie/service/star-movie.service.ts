import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Result, UltimateMovies } from '../interfaces/ultimate-movies.interface';
import { ResultM, Top } from '../interfaces/top-movies.interfaces';
import { Info } from '../interfaces/info-movies.interfaces';

import { Cast, Casting } from '../interfaces/casting-movies.interface';
import { ActorMovies, ResultP, Soon } from '../interfaces/soon-movies.interface';
import { ListTop, ResultList } from '../interfaces/list-movies.interfaces';
import { Actor } from '../interfaces/actor-movies.interface';
import { ResultS, Similar } from '../interfaces/similar-movies.interfaces';

@Injectable({providedIn: 'root'})




export class StarMovieService {

  // properties:
  private baseUrl: string = environments.baseUrl

  private apiKey: string = environments.apiKey

  constructor( private httpClient: HttpClient) { }


  /**
   * Este metodo me sirve para atraer las ultimas peliculas
   * @returns Retorna un observable que emite un array de tipo resultado
   */
  public getUltimateMovies(): Observable<Result[]> {
    return this.httpClient.get<UltimateMovies>(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}`)
    .pipe(
      map( response =>  response.results)
    )
  }

  /**
   *  Este metodo nos devuelve una lista de peliculas
   * @param game es tipo numero
   * @return Devuelve un observable<emite un tipo ResultM []>
   */
  public getListMovies(game: number): Observable<ResultM[]> {
    return this.httpClient.get<Top>(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${game}`)
    .pipe(
      map( response => response.results )
    )
  }

  /**
   * Obtener peliculas por medio del id
   * @param id ttipo number
   * @returns Puede retornar un observable que emite info o undefined
   */
  public getMovieById(id:number): Observable< Info | undefined >{
    return this.httpClient.get<Info>(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
    .pipe(
      catchError( error => of( undefined ))
    )
  }

  /**
   * Obtenemos las peliculas similares por medio del id de la pelicula
   * @param id tipo number
   * @returns Retorna un observable que emite un arreglo de results
   */
  public getSimilarMovies(id: number): Observable<ResultS[]> {
    return this.httpClient.get<Similar>(`${this.baseUrl}movie/${id}/similar?api_key=${this.apiKey}`)
    .pipe(
      map(response => response.results)
    )
  }


  /**
   * Nos devuelve el casting de la pelicula por medio del id
   * @param id tipo number
   * @returns retorna un observable que emite un arreglo de tipo Cast
   */
  public getCastingToMovie(id: number): Observable<Cast[]>{
    return this.httpClient.get<Casting>(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`)
    .pipe(
      // usamos el slice para solo obtener informacion desde la posicion 0 a la 5
      map( response  => response.cast.slice(0,5) )
    )
  }

  /**
   * obtenemos las proximas peliculas
   * @returns retorna un observable que emite un arreglo de tipo ResultP
   */
  public getSoonMovies(): Observable<ResultP[]>{
    return this.httpClient.get<Soon>(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=1`)
    .pipe(
      map( response => response.results )
    )
  }

  /**
   * Obtenemos las peliculas trending
   * @param page tipo number es para actualizar la page del paginator
   * @returns  retorna un observable que emite un arreglo de tipo ResultList
   */
  public getTopRatingMovies(page: number):Observable<ResultList[]>{
    return this.httpClient.get<ListTop>(`${this.baseUrl}trending/all/day?api_key=${this.apiKey}&page=${page}`)
    .pipe(
      map( response => response.results)
    )
  }

  /**
   * nos permite buscar la pelicula por nombre
   * @param name de tipo string
   * @param page de tipo number
   * @returns retorna un observable que emite un arreglo de tipo ResultM
   */
  public getMovieBySearch(name: string, page:number ): Observable<ResultM[]>{
    return this.httpClient.get<Top>(`${this.baseUrl}search/movie?query=${name}&api_key=${this.apiKey}&page=${page}`)
    .pipe(
      map( response => response.results )
    )
  }

  /**
   * Nos permite obtener la informacion de un actor por medio del id
   * @param id de tipo number
   * @returns Retorna un Observable de tipo Actor
   */
  public getInfoActor( id:number ): Observable<Actor> {
    return this.httpClient.get<Actor>(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`)
  }

  /**
   * nos permite obtener los creditos del actor
   * o bien las peliculas donde ah participado
   * @param id tipo number
   * @returns void
   */
  public getCreditsActor(id: number){
    return this.httpClient.get<ActorMovies>(`${this.baseUrl}person/${id}/movie_credits?api_key=${this.apiKey}`)
    .pipe(
      // usamos el slice para solo obtener informacion desde la posicion 0 a la 10
      map( response => response.cast.slice(0,10))
    )

  }

}
