import { TestBed } from '@angular/core/testing';

import { GlobalNavigationService } from './global-navigation.service';

describe('GlobalNavigationService', () => {
  let service: GlobalNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
