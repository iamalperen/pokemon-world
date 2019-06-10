import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {LoginComponent} from './components/login/login.component';
import {PokemonDetailComponent} from './components/pokemon-detail/pokemon-detail.component';
import {AuthGuard} from './guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: ':name',
    component: PokemonDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
