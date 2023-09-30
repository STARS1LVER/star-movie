import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImageCarrousel'
})

// si la ruta existe le indicamos un path valido
//  y si no existe le indicamos uno por defecto
export class MovieImageCarrouselPipe implements PipeTransform {
  transform( text: string ): string {

    if( !text ){
      return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
    }

    return `https://image.tmdb.org/t/p/original${text}`

  }
}
