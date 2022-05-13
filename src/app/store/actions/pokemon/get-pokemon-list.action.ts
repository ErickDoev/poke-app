import { createAction, props } from "@ngrx/store";

export const getPokemonList = createAction(
    '[POKEMON] Get Pokemon List',
    props<{ url: string | undefined}>()
);

export const getPokemonListSuccess = createAction(
    '[POKEMON] Get Pokemon List Success',
    props<{ payload: any }>()
);

export const getPokemonListError = createAction(
    '[POKEMON] Get Pokemon List Error',
    props<{ error: any }>()
);