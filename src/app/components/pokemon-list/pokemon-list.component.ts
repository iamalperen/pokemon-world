import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Pokemon} from '../../models/pokemon/pokemon.model';
import {Store} from '@ngrx/store';
import {RootStoreState} from '../../root-store';
import {PokemonListStoreActions, PokemonListStoreSelectors} from '../../root-store/pokemon-list-store';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  public isLoading$: Observable<boolean>;
  public isError$: Observable<boolean>;
  public pokemonList$: Observable<Pokemon[]>;
  private PAGE = 1;
  private ITEMS_PER_PAGE = 18;

  constructor(private store$: Store<RootStoreState.State>) {
    // Selectors
    this.isLoading$ = this.store$.select(PokemonListStoreSelectors.selectPokemonListError);
    this.isError$ = this.store$.select(PokemonListStoreSelectors.selectPokemonListIsLoading);
    this.pokemonList$ = this.store$.select(PokemonListStoreSelectors.selectPokemonList);

    // Actions
    this.store$.dispatch(new PokemonListStoreActions.PokemonListLoadRequestAction());
  }
}
