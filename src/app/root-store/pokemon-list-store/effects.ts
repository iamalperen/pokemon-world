import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as pokemonListActions from './actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PokemonService} from '../../services/pokemon/pokemon.service';
import {of} from 'rxjs';


@Injectable()
export class PokemonListEffects {

  constructor(private pokemonService: PokemonService, private actions$: Actions) {
  }

  @Effect()
  loadPokemonList$ = this.actions$.pipe(
    ofType<pokemonListActions.PokemonListLoadRequestAction>(
      pokemonListActions.ActionTypes.LOAD_POKEMON_LIST_REQUEST
    ),
    switchMap((action) =>
      this.pokemonService.getPokemonList()
        .pipe(
          map(data => {
            const pokemon_list = data.results;
            return (new pokemonListActions.PokemonListLoadSuccessAction({pokemon_list}));
          }),
          catchError(error => of(new pokemonListActions.PokemonListLoadFailureAction(error)))
        )
    )
  );

}
