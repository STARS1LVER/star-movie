import { StarMovieService } from '../../service/star-movie.service';
import { ResultM } from '../../interfaces/top-movies.interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { ResultList } from '../../interfaces/list-movies.interfaces';
import { ResultP } from '../../interfaces/soon-movies.interface';

@Component({
  selector: 'star-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {


  // Recibimos informacion del padre por medio de este Input
  @Input()
  public moviesReceived!: ResultM |  ResultP

  ngOnInit(): void {
    // Validamos que exista
    if( !this.moviesReceived ) throw new Error('The list movies property is required')
  }




}
