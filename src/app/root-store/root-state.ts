import * as PokemonListState from './pokemon-list-store/state';
import * as PokemonDetailState from './pokemon-detail-store/state';

export interface State {
  pokemon_list: PokemonListState.State;
  pokemon_detail: PokemonDetailState.State;
}
