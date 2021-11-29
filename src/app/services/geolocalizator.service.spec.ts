import { TestBed } from '@angular/core/testing';

import { GeolocalizatorService } from './geolocalizator.service';

describe('GeolocalizatorService', () => {
  let service: GeolocalizatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocalizatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
