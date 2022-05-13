import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  getSpecie,
  getSpecieError,
  getSpecieSuccess,
} from '../../actions/pokemon/get-specie.actions';
import { PokemonService } from '../../../providers/services/pokemon.service';

@Injectable()
export class SpecieEffects {

    constructor(
        private actions$: Actions,
        private pokemonService:  PokemonService
    ) {}

    getSpecie$ = createEffect(() =>
        this.actions$.pipe(
        ofType(getSpecie),
        switchMap(({ id }) =>
            this.pokemonService.getSpecie(id).pipe(
                map((payload) => getSpecieSuccess({ payload })),
                catchError((error) => of(getSpecieError({ error })))
            )
            )
        )
    );
}
