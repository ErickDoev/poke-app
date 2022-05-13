import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectEntity, selectLoaded, selectLoading, selectError } from "../../selectors/pokemon/get-pokemon.selector";
import { getPokemon } from '../../actions/pokemon/get-pokemon.actions';
import { PokemonUtilInfo } from "src/app/models/pokemon.model";
import { PokemonService } from "src/app/providers/services/pokemon.service";

@Injectable({
  providedIn: 'root',
})
export class GetPokemonsFacade {

  constructor(private store: Store, private pokeService: PokemonService) { }

  entity$: Observable<PokemonUtilInfo | null> = this.store.pipe(select(selectEntity));

  isLoading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  isLoaded$: Observable<boolean> = this.store.pipe(select(selectLoaded));

  error$: Observable<any> = this.store.pipe(select(selectError));

  fetch(id: number){
        this.store.dispatch(getPokemon({id}));
  }

}
