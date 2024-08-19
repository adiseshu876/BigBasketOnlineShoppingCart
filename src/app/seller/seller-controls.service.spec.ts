import { TestBed } from '@angular/core/testing';

import { SellerControlsService } from './seller-controls.service';

describe('SellerControlsService', () => {
  let service: SellerControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
