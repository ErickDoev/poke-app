import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonList, PokemonListResponse, PokemonResponse, PokemonUtilInfo, Specie } from 'src/app/models/pokemon.model';
import { map, forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  getPokemonById(id: number): Observable<PokemonUtilInfo>{    
    return this.http.get<PokemonResponse>(`${this.url}/pokemon/${id}`)
      .pipe(map(this.tranformPokemonInfo))
  }

  private tranformPokemonInfo(resp: PokemonResponse){
    const stats = resp.stats.map(stat => ({
      valueStat: stat.base_stat,
      stat: stat.stat.name
    }))

    const abilities = resp.abilities.map(ability => ability.ability.name)

    const moves = resp.moves.map(move => move.move.name)

    const types = resp.types.map(type => ({
      slot:type.slot,
      type: type.type.name
    }))

    return{
      id:resp.id,
      stats,
      base_experience: resp.base_experience,
      height: resp.height,
      name:resp.name,
      order: resp.order,
      weight: resp.weight,
      abilities,
      moves,
      types,
      img: resp.sprites.other?.dream_world.front_default
    }
  }
  //getPokemons(){
  //  let pet=[];
  //  for(let i = 1; i <= 20; i++){
  //    pet.push( this.getPokemonById(i))
  //  }    
  //  
  //  return forkJoin(pet)
  //}

  getAllPokemos(){
    return this.http.get<PokemonListResponse>(`${this.url}/pokemon?limit=1126`)
      .pipe(resp => resp)
  }

  getPokemonList(url: string | undefined): Observable<PokemonList>{
    if(!url){
      url = `${this.url}/pokemon?offset=0&limit=20`
    }
    return this.http.get<PokemonListResponse>(url)
      .pipe(map( (resp) => {
        return {
          pokemon: this.transformPokemon(resp),
          next: resp.next,
          previous: resp.previous,
        }
      }))
  }

  private transformPokemon(resp: PokemonListResponse): Pokemon[]{

    const pokeList = resp.results.map(poke => {
      const arr = poke.url.split('/');      
      const id = arr[6];
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
   
      return {
        id,
        img,
        name:poke.name
      }
    })

    return pokeList;
  }

  getSpecie(id: number){
    return this.http.get<Specie>(`${this.url}/pokemon-species/${id}`)
      .pipe(map(resp => resp))
  }

}
