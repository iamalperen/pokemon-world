import {TestBed, async, inject} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {HeaderComponent} from '../../components/header/header.component';
import {PokemonListComponent} from '../../components/pokemon-list/pokemon-list.component';
import {LoginComponent} from '../../components/login/login.component';
import {PokemonDetailComponent} from '../../components/pokemon-detail/pokemon-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../../app-routing.module';
import {RootStoreModule} from '../../root-store';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';

describe('AuthGuard', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, PokemonListComponent, LoginComponent, PokemonDetailComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        RootStoreModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule
      ],
      providers: [AuthGuard]
    })
      .compileComponents();
  }));

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
