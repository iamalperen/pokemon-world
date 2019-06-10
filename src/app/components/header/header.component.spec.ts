import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../../app-routing.module';
import {RootStoreModule} from '../../root-store';
import {PokemonListComponent} from '../pokemon-list/pokemon-list.component';
import {LoginComponent} from '../login/login.component';
import {PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';
import {Router} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {Location} from '@angular/common';
import {By} from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let location: Location;

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
      providers: []
    })
      .compileComponents();
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT show user welcome message if user NOT logged in', () => {
    component.auth.isAuthenticated = () => false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.header__user-actions'))).toBeNull();
  });

  it('should show user welcome message if user logged in', () => {
    component.auth.isAuthenticated = () => true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.header__user-actions'))).not.toBeNull();
  });

});
