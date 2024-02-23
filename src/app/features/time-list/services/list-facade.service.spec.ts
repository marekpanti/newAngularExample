import { TestBed } from '@angular/core/testing';

import { ListFacadeService } from './list-facade.service';

describe('ListFacadeService', () => {
  let service: ListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
