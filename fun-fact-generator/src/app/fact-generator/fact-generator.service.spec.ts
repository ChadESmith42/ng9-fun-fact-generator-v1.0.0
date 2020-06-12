import { TestBed } from '@angular/core/testing';

import { FactGeneratorService } from './fact-generator.service';

describe('FactGeneratorService', () => {
  let service: FactGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
