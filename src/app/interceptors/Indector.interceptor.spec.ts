import { TestBed } from '@angular/core/testing';

import { IndectorService } from './Indector.interceptor';

describe('IndectorService', () => {
  let service: IndectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndectorService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
