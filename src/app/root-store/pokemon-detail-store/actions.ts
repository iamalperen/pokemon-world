import {Action} from '@ngrx/store';
import {Pokemon} from '../../models/pokemon/pokemon.model';

export enum ActionTypes {
  LOAD_POKEMON_DETAIL_REQUEST = '[POKEMON_DETAIL] Load Request',
  LOAD_POKEMON_DETAIL_FAILURE = '[POKEMON_DETAIL] Load Failure',
  LOAD_POKEMON_DETAIL_SUCCESS = '[POKEMON_DETAIL] Load Success'
}

export class PokemonDetailLoadRequestAction implements Action {
  constructor(public pokemonId: string) {

  }

  readonly type = ActionTypes.LOAD_POKEMON_DETAIL_REQUEST;
}

export class PokemonDetailLoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_POKEMON_DETAIL_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class PokemonDetailLoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_POKEMON_DETAIL_SUCCESS;

  constructor(public payload: { pokemon_detail: Pokemon }) {
  }
}

export type Actions = PokemonDetailLoadRequestAction | PokemonDetailLoadFailureAction | PokemonDetailLoadSuccessAction;
