import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectEntities, selectLoaded, selectLoading } from "../../selectors/pokemon/get-pokemon-list.selector";
import { getPokemonList } from '../../actions/pokemon/get-pokemon-list.action';
import { PokemonList } from "src/app/models/pokemon.model";
import { PokemonService } from "src/app/providers/services/pokemon.service";

@Injectable({
  providedIn: 'root',
})
export class GetPokemonListFacade {

  constructor(private store: Store, private pokeService: PokemonService) { }

  entities$: Observable<PokemonList | undefined> = this.store.pipe(select(selectEntities));

  isLoading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  isLoaded$: Observable<boolean> = this.store.pipe(select(selectLoaded));

  fetch(url: string | undefined){
    this.store.dispatch(getPokemonList({url}));
  }

}
