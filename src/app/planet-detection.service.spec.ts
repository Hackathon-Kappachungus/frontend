import { TestBed } from '@angular/core/testing';

import { PlanetDetectionService } from './planet-detection.service';

describe('PlanetDetectionService', () => {
  let service: PlanetDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
