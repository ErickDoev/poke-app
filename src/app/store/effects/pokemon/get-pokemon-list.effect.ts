import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  getPokemonList,
  getPokemonListSuccess,
  getPokemonListError
} from '../../actions/pokemon/get-pokemon-list.action';
import { PokemonService } from '../../../providers/services/pokemon.service';

@Injectable()
export class PokemonListEffects {

    constructor(
        private actions$: Actions,
        private pokemonService:  PokemonService
    ) {}

    getPokemonList$ = createEffect(() =>
        this.actions$.pipe(
        ofType(getPokemonList),
        switchMap(({ url }) =>
            this.pokemonService.getPokemonList(url).pipe(
                map((payload) => getPokemonListSuccess({ payload })),
                catchError((error) => of(getPokemonListError({ error })))
            )
            )
        )
    );

}
