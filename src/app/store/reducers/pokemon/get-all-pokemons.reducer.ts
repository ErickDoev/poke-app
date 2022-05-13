import { Action, createReducer, on } from "@ngrx/store";
import { PokemonListResponse } from "src/app/models/pokemon.model";
import { getAllPokemonList, getAllPokemonListError, getAllPokemonListSuccess } from '../../actions/pokemon/get-all-pokemons.actions';

export type AllPokemonsState = {
    entities: PokemonListResponse |undefined;
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState: AllPokemonsState = {
    entities: undefined,
    loading: false,
    loaded: false,
    error: null,
}

const _allPokemonReducer = createReducer(initialState, 
    on(getAllPokemonList, (state) => ({
        ...state,
        loading: true,
        loaded: false,
    })),
    on(getAllPokemonListError, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: true,
    })),
    on(getAllPokemonListSuccess, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        entities: payload
    }))
);

export function allPokemonReducer(state: AllPokemonsState | undefined, action: Action){
    return _allPokemonReducer(state, action)
}