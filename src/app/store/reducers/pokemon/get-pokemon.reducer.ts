import { Action, createReducer, on } from "@ngrx/store";
import { PokemonResponse, PokemonUtilInfo } from "src/app/models/pokemon.model";
import { getPokemon, getPokemonSuccess, getPokemonError } from '../../actions/pokemon/get-pokemon.actions';

export type PokemonState = {
    entity: PokemonUtilInfo | null;
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState: PokemonState = {
    entity: null,
    loading: false,
    loaded: false,
    error: null,
}

const _pokemonReducer = createReducer(initialState, 
    on(getPokemon, (state) => ({
        ...state,
        loading: true,
        loaded: false,
    })),
    on(getPokemonSuccess, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: true,
        entity: payload
    })),
    on(getPokemonError, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: error
    }))
);

export function pokemonReducer(state: PokemonState | undefined, action: Action){
    return _pokemonReducer(state, action)
}