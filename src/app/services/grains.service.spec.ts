import { TestBed } from '@angular/core/testing';

import { GrainsService } from './grains.service';

describe('GrainsService', () => {
  let service: GrainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
