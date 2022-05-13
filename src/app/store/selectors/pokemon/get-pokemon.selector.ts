import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as pokemonReducer from '../../reducers/pokemon/get-pokemon.reducer';

export const getPokemonsState = createFeatureSelector<pokemonReducer.PokemonState>('pokemon');

export const selectEntity = createSelector(
    getPokemonsState,
    (state) => state.entity
);

export const selectLoading = createSelector(
    getPokemonsState,
    (state) => state.loading
);

export const selectLoaded = createSelector(
    getPokemonsState,
    (state) => state.loaded
);

export const selectError = createSelector(
    getPokemonsState,
    (state) => state.error
);