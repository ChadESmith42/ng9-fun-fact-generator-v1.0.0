import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactGeneratorComponent } from './fact-generator.component';
import { FactGeneratorService } from './fact-generator.service';

describe('Fact Generator Component', () => {
  let component: FactGeneratorComponent;
  let fixture: ComponentFixture<FactGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactGeneratorComponent ],
      providers: [
         FactGeneratorService
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(FactGeneratorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  describe('#copyright', () => {
    it('equals the current year for the #copyright', () => {
      const now = new Date();

      expect(component.copyright).toEqual(now.getFullYear());
    });
  });

  describe('#GetNewFact()', () => {
    it('updates the value of the #funFact from the service', () => {
      const initial = component.funFact.value;
      component.GetNewFact();
      const newValue = component.funFact.value;

      expect(newValue).not.toEqual(initial);
    });

    it('adds the #funFact to the #previousFacts array', () => {
      const initial = component.funFact.value;
      const previousFactsArray = component.previousFacts;
      component.GetNewFact();

      const newArray = component.previousFacts;
      const firstFact = newArray.filter(f => f === initial );

      expect(firstFact[0]).toEqual(initial);
    });
  });
});
