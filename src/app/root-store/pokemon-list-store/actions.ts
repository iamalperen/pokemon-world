import {Action} from '@ngrx/store';
import {Pokemon} from '../../models/pokemon/pokemon.model';

export enum ActionTypes {
  LOAD_POKEMON_LIST_REQUEST = '[POKEMON_LIST] Load Request',
  LOAD_POKEMON_LIST_FAILURE = '[POKEMON_LIST] Load Failure',
  LOAD_POKEMON_LIST_SUCCESS = '[POKEMON_LIST] Load Success'
}

export class PokemonListLoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_POKEMON_LIST_REQUEST;
}

export class PokemonListLoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_POKEMON_LIST_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class PokemonListLoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_POKEMON_LIST_SUCCESS;

  constructor(public payload: { pokemon_list: Pokemon[] }) {
  }
}

export type Actions = PokemonListLoadRequestAction | PokemonListLoadFailureAction | PokemonListLoadSuccessAction;
