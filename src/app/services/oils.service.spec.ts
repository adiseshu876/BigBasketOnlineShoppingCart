import { TestBed } from '@angular/core/testing';

import { OilsService } from './oils.service';

describe('OilsService', () => {
  let service: OilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
