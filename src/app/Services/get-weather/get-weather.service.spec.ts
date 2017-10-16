/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetWeatherService } from './get-weather.service';

describe('GetWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWeatherService]
    });
  });

  it('should ...', inject([GetWeatherService], (service: GetWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
