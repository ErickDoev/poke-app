import { createAction, props } from "@ngrx/store";
import { PokemonListResponse } from "src/app/models/pokemon.model";

export const getAllPokemonList = createAction(
    '[POKEMON] Get All Pokemon List'
);

export const getAllPokemonListSuccess = createAction(
    '[POKEMON] Get All Pokemon List Success',
    props<{ payload: PokemonListResponse }>()
);

export const getAllPokemonListError = createAction(
    '[POKEMON] Get All Pokemon List Error',
    props<{ error: any }>()
);