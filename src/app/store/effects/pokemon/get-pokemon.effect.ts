import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  getPokemon,
  getPokemonSuccess,
  getPokemonError,
} from '../../actions/pokemon/get-pokemon.actions';
import { PokemonService } from '../../../providers/services/pokemon.service';

@Injectable()
export class PokemonEffects {

    constructor(
        private actions$: Actions,
        private pokemonService:  PokemonService
    ) {}

    getPokemon$ = createEffect(() =>
        this.actions$.pipe(
        ofType(getPokemon),
        switchMap(({ id }) =>
            this.pokemonService.getPokemonById(id).pipe(
                map((payload) => getPokemonSuccess({ payload })),
                catchError((error) => of(getPokemonError({ error })))
            )
            )
        )
    );
}
