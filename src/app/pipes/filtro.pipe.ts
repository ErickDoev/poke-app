import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon, Result } from '../models/pokemon.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Result[], search: string = ''): Result[] | []{
    
    if(search.length === 0)return [];

    const filteredPokemons = pokemons.filter(poke => poke.name.includes( search ))
    return filteredPokemons.slice(0,5);  
  }

}
