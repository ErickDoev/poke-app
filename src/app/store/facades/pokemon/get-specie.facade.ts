import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectEntity, selectLoaded, selectLoading, selectError } from "../../selectors/pokemon/get-specie.selector";
import { getSpecie } from '../../actions/pokemon/get-specie.actions';
import { Specie } from "src/app/models/pokemon.model";
import { PokemonService } from "src/app/providers/services/pokemon.service";

@Injectable({
  providedIn: 'root',
})
export class GetSpecieFacade {

  constructor(private store: Store, private pokeService: PokemonService) { }

  entity$: Observable<Specie | null> = this.store.pipe(select(selectEntity));

  isLoading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  isLoaded$: Observable<boolean> = this.store.pipe(select(selectLoaded));

  error$: Observable<any> = this.store.pipe(select(selectError));

  fetch(id: number){
        this.store.dispatch(getSpecie({id}));
  }

}
