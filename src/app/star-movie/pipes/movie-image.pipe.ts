import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})

// si la ruta existe le indicamos un path valido
//  y si no existe le indicamos uno por defecto
export class MovieImagePipe implements PipeTransform {
  transform( text: string ): string {

    if( !text ){
      return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
    }

    // le concatenamos a esta ruta la otra ruta que trae la api
    return `https://image.tmdb.org/t/p/w185${text}`

  }
}
