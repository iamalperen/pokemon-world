import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import {State} from './state';
import {Pokemon} from '../../models/pokemon/pokemon.model';

const getPokemonListState: MemoizedSelector<object, State> = createFeatureSelector<State>('pokemon_list');

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getPokemonList = (state: State): any => state.pokemon_list;

export const selectPokemonListError: MemoizedSelector<object, boolean> = createSelector(getPokemonListState, getError);

export const selectPokemonListIsLoading: MemoizedSelector<object, boolean> = createSelector(getPokemonListState, getIsLoading);

export const selectPokemonList: MemoizedSelector<object, Pokemon[]> = createSelector(getPokemonListState, getPokemonList);
