import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  getAllPokemonList,
  getAllPokemonListSuccess,
  getAllPokemonListError
} from '../../actions/pokemon/get-all-pokemons.actions';
import { PokemonService } from '../../../providers/services/pokemon.service';

@Injectable()
export class AllPokemonsEffects {

    constructor(
        private actions$: Actions,
        private pokemonService:  PokemonService
    ) {}

    getAllPokemons$ = createEffect(() =>
        this.actions$.pipe(
        ofType(getAllPokemonList),
        switchMap(() =>
            this.pokemonService.getAllPokemos().pipe(
                map((payload) => getAllPokemonListSuccess({ payload })),
                catchError((error) => of(getAllPokemonListError({ error })))
            )
            )
        )
    );

}
