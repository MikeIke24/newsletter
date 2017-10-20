import { TestBed, inject } from '@angular/core/testing';

import { ParseTimeService } from './parse-time.service';

describe('ParseTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseTimeService]
    });
  });

  it('should be created', inject([ParseTimeService], (service: ParseTimeService) => {
    expect(service).toBeTruthy();
  }));
});
