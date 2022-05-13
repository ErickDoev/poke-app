import { Action, createReducer, on } from "@ngrx/store";
import { PokemonList } from "src/app/models/pokemon.model";
import { getPokemonList, getPokemonListError, getPokemonListSuccess } from '../../actions/pokemon/get-pokemon-list.action';

export type PokemonListState = {
    entities: PokemonList |undefined;
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState: PokemonListState = {
    entities: undefined,
    loading: false,
    loaded: false,
    error: null,
}

const _pokemonListReducer = createReducer(initialState, 
    on(getPokemonList, (state) => ({
        ...state,
        loading: true,
        loaded: false,
    })),
    on(getPokemonListSuccess, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: true,
        entities: payload
    })),
    on(getPokemonListError, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: error
    }))
);

export function pokemonListReducer(state: PokemonListState | undefined, action: Action){
    return _pokemonListReducer(state, action)
}