import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieText'
})

// Reducimos el texto
export class MovieTextPipe implements PipeTransform {
  transform(text: string): string {

    if( !text ){
      return 'Name is not Available'
    }

    if( text.length > 16){
      let textoReducido = text.substring(0, 18)
      return textoReducido += '...'
    }


    return text
  }
}
