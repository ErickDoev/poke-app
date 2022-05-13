import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as pokemonReducer from '../../reducers/pokemon/get-pokemon-list.reducer';

export const getPokemonsListState = createFeatureSelector<pokemonReducer.PokemonListState>('pokemonList');

export const selectEntities = createSelector(
    getPokemonsListState,
    (state) => state.entities
);

export const selectLoading = createSelector(
    getPokemonsListState,
    (state) => state.loading
);

export const selectLoaded = createSelector(
    getPokemonsListState,
    (state) => state.loaded
);

export const selectError = createSelector(
    getPokemonsListState,
    (state) => state.error
);