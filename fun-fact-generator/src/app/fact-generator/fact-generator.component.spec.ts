import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactGeneratorComponent } from './fact-generator.component';

describe('FactGeneratorComponent', () => {
  let component: FactGeneratorComponent;
  let fixture: ComponentFixture<FactGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
