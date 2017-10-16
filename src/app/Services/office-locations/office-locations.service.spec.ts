/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OfficeLocationsService } from './office-locations.service';

describe('OfficeLocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficeLocationsService]
    });
  });

  it('should ...', inject([OfficeLocationsService], (service: OfficeLocationsService) => {
    expect(service).toBeTruthy();
  }));
});
