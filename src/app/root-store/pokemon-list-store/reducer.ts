import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function pokemonListReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_POKEMON_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_POKEMON_LIST_SUCCESS: {
      return {
        ...state,
        pokemon_list: action.payload.pokemon_list,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.LOAD_POKEMON_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
