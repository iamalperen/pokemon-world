import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function pokemonDetailReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_POKEMON_DETAIL_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_POKEMON_DETAIL_SUCCESS: {
      return {
        ...state,
        pokemon_detail: action.payload.pokemon_detail,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.LOAD_POKEMON_DETAIL_FAILURE: {
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
