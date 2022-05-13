import { Action, createReducer, on } from "@ngrx/store";
import { Specie } from "src/app/models/pokemon.model";
import { getSpecie, getSpecieSuccess, getSpecieError } from '../../actions/pokemon/get-specie.actions';

export type SpecieState = {
    entity: Specie | null;
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState: SpecieState = {
    entity: null,
    loading: false,
    loaded: false,
    error: null,
}

const _pokemonSpecie = createReducer(initialState, 
    on(getSpecie, (state) => ({
        ...state,
        loading: true,
        loaded: false,
    })),
    on(getSpecieSuccess, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: true,
        entity: payload
    })),
    on(getSpecieError, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: error
    }))
);

export function pokemonSpecie(state: SpecieState | undefined, action: Action){
    return _pokemonSpecie(state, action)
}