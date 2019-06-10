import {async, TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {HeaderComponent} from '../../components/header/header.component';
import {PokemonListComponent} from '../../components/pokemon-list/pokemon-list.component';
import {LoginComponent} from '../../components/login/login.component';
import {PokemonDetailComponent} from '../../components/pokemon-detail/pokemon-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../../app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';

describe('AuthService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, PokemonListComponent, LoginComponent, PokemonDetailComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        NgxPaginationModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
