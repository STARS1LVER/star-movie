import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieBiography'
})

// Reducir la cantidad de caracteres de la biografia
export class MovieBiographyPipe implements PipeTransform {
  transform(text: string): string {

    if( text.length > 500){
      let textoReducido = text.substring(0, 400)
      return textoReducido += '.'
    }

    return text
  }
}
