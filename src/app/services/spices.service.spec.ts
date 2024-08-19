import { TestBed } from '@angular/core/testing';

import { SpicesService } from './spices.service';

describe('SpicesService', () => {
  let service: SpicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
