import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonListStoreModule} from './pokemon-list-store/pokemon-list-store.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PokemonDetailStoreModule} from './pokemon-detail-store/pokemon-detail-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonListStoreModule,
    PokemonDetailStoreModule,
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ]
})
export class RootStoreModule {
}
