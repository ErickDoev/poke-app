import { createAction, props } from "@ngrx/store";
import { PokemonUtilInfo } from "src/app/models/pokemon.model";

export const getPokemon = createAction(
    '[POKEMON] Get Pokemon',
    props<{id: number}>()
);

export const getPokemonSuccess = createAction(
    '[POKEMON] Get Pokemon Success',
    props<{ payload: PokemonUtilInfo }>()
);

export const getPokemonError = createAction(
    '[POKEMON] Get Pokemon Error',
    props<{ error: any }>()
);
