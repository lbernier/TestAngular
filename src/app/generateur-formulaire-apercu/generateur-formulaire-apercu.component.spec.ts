import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurFormulaireApercuComponent } from './generateur-formulaire-apercu.component';

describe('GenerateurFormulaireApercuComponent', () => {
  let component: GenerateurFormulaireApercuComponent;
  let fixture: ComponentFixture<GenerateurFormulaireApercuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateurFormulaireApercuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateurFormulaireApercuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
