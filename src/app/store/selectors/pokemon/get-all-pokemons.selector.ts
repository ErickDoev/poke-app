import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as allPokemonReducer from '../../reducers/pokemon/get-all-pokemons.reducer';

export const getPokemonsListState = createFeatureSelector<allPokemonReducer.AllPokemonsState>('allPokemonList');

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