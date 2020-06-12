import { TestBed } from '@angular/core/testing';

import { FactGeneratorService } from './fact-generator.service';

describe('Fact Generator Service', () => {
  let service: FactGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactGeneratorService);
  });

  describe('#GetNewFact()', () => {
    it('updates the value for #funFact', () => {
      const initial = service.funFact.value;

      service.GetFact();
      const newValue = service.funFact.value;

      expect(initial).not.toEqual(newValue);
    });

    it('creates a new fact based on Factoids file', () => {
      service.factoids = {
        nouns: [ { id: 1, noun: 'tree bark' } ],
        descriptors: [ { id: 1, descriptor: 'raw' } ],
        verbs: [ { id: 1, verb: 'gnaw'} ]
      };
      service.GetFact();
      const newValue = service.funFact.value;

      expect(newValue).toEqual('I gnaw raw tree bark.');
    });
  });
});
