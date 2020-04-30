import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurFormulaireComponent } from './generateur-formulaire.component';

describe('GenerateurFormulaireComponent', () => {
  let component: GenerateurFormulaireComponent;
  let fixture: ComponentFixture<GenerateurFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateurFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateurFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
