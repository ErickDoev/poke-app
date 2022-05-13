import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonListResponse, Result } from 'src/app/models/pokemon.model';
import { GetAllPokemonListFacade } from 'src/app/store/facades/pokemon/get-all-pokemons.facade';


@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  pokemons!: Result[] | undefined;

  displayedColumns: string[] = ['name'];

  search: string = '';
  id: string = '';

  constructor(
    private getAllPokemonsFacade: GetAllPokemonListFacade
  ) { }

  onSearchPokemon(val: string){
    this.search = val;
  }

  onClick(row: Result){
    const url = row.url;
    this.id = url.split('/')[6];
  }

  ngOnInit(): void {
    this.getAllPokemonsFacade.entities$.subscribe(ents =>{
      this.pokemons = ents?.results;
    })
  }

}
