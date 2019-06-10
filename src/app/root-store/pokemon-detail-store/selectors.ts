import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import {State} from './state';
import {Pokemon} from '../../models/pokemon/pokemon.model';

const getPokemonDetailState: MemoizedSelector<object, State> = createFeatureSelector<State>('pokemon_detail');

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getPokemonDetail = (state: State): any => state.pokemon_detail;

export const selectPokemonDetailError: MemoizedSelector<object, boolean> = createSelector(getPokemonDetailState, getError);

export const selectPokemonDetailIsLoading: MemoizedSelector<object, boolean> = createSelector(getPokemonDetailState, getIsLoading);

export const selectPokemonDetail: MemoizedSelector<object, Pokemon> = createSelector(getPokemonDetailState, getPokemonDetail);

