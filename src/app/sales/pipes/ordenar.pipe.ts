import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heros: Hero[], sortBy: string = 'sin valor' ): Hero[] {
    
    switch( sortBy ) {
      case 'name':
        return heros.sort(( a, b ) => ( a.name > b.name ) ? 1 : -1 );

      case 'flight':
        return heros.sort(( a, b ) => ( a.flight > b.flight ) ? -1 : 1 );

      case 'color':
        return heros.sort(( a, b ) => ( a.color > b.color ) ? 1 : -1 );

      default:
        return heros;
    }

  }
}
