import { Component, OnInit, Input } from '@angular/core';
import { ResultList } from '../../interfaces/list-movies.interfaces';

@Component({
  selector: 'star-card-top',
  templateUrl: './card-top.component.html',
  styleUrls: ['./card-top.component.css']
})
export class CardTopComponent implements OnInit {

  // Recibimos informacion del padre por medio de este Input
  @Input()
  public moviesTopReceived!: ResultList

  ngOnInit(): void {
    // Validamos si existe
    if( !this.moviesTopReceived ) throw new Error('The list movies property is required')
  }



}
