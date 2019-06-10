import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../../models/pokemon/pokemon.model';
import {Store} from '@ngrx/store';
import {RootStoreState} from '../../root-store';
import {PokemonDetailStoreSelectors, PokemonDetailStoreActions} from '../../root-store/pokemon-detail-store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  public isLoading$: Observable<boolean>;
  public isError$: Observable<boolean>;
  public pokemon$: Observable<Pokemon>;

  constructor(private store$: Store<RootStoreState.State>, private route: ActivatedRoute) {
    // Route Parameter
    const pokemonName = route.snapshot.paramMap.get('name');

    // Selectors
    this.isLoading$ = this.store$.select(PokemonDetailStoreSelectors.selectPokemonDetailIsLoading);
    this.isError$ = this.store$.select(PokemonDetailStoreSelectors.selectPokemonDetailError);
    this.pokemon$ = this.store$.select(PokemonDetailStoreSelectors.selectPokemonDetail);

    // Actions
    this.store$.dispatch(new PokemonDetailStoreActions.PokemonDetailLoadRequestAction(pokemonName));
  }
}

