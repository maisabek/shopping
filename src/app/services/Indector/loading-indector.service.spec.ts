import { TestBed } from '@angular/core/testing';

import { LoadingIndectorService } from './loading-indector.service';

describe('LoadingIndectorService', () => {
  let service: LoadingIndectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingIndectorService);
  });

  it('should be created', () => {
    // expect(service.start()).toThrow();
  })
})
