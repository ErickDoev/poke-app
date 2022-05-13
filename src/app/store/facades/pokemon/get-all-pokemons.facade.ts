import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectEntities, selectLoaded, selectLoading } from "../../selectors/pokemon/get-all-pokemons.selector";
import { getAllPokemonList } from '../../actions/pokemon/get-all-pokemons.actions';
import { PokemonList, PokemonListResponse } from "src/app/models/pokemon.model";

@Injectable({
  providedIn: 'root',
})
export class GetAllPokemonListFacade {

  constructor(private store: Store) { }

  entities$: Observable<PokemonListResponse | undefined> = this.store.pipe(select(selectEntities));

  isLoading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  isLoaded$: Observable<boolean> = this.store.pipe(select(selectLoaded));

  fetch(){
    this.store.dispatch(getAllPokemonList());
  }

}
