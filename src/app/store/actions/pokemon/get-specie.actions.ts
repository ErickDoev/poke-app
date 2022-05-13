import { createAction, props } from "@ngrx/store";
import { Specie } from "src/app/models/pokemon.model";

export const getSpecie = createAction(
    '[SPECIE] Get Specie',
    props<{id: number}>()
);

export const getSpecieSuccess = createAction(
    '[SPECIE] Get Specie Success',
    props<{ payload: Specie }>()
);

export const getSpecieError = createAction(
    '[SPECIE] Get Pokemon Error',
    props<{ error: any }>()
);
