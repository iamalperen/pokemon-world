import {async, fakeAsync, getTestBed, inject, TestBed} from '@angular/core/testing';

import {PokemonService} from './pokemon.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('PokemonService', () => {
  let service: PokemonService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    injector = getTestBed();
    service = injector.get(PokemonService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});


