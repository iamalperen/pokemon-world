import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {pokemonDetailReducer} from './reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PokemonDetailEffects} from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('pokemon_detail', pokemonDetailReducer),
    EffectsModule.forFeature([PokemonDetailEffects])
  ],
  providers: [PokemonDetailEffects]
})
export class PokemonDetailStoreModule {
}

