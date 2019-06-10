import {Pokemon} from '../../models/pokemon/pokemon.model';

export interface State {
  pokemon_list: Pokemon[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  pokemon_list: [],
  isLoading: false,
  error: null
};
