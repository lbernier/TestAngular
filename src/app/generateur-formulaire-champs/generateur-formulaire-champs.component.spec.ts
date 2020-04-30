import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurFormulaireChampsComponent } from './generateur-formulaire-champs.component';

describe('GenerateurFormulaireChampsComponent', () => {
  let component: GenerateurFormulaireChampsComponent;
  let fixture: ComponentFixture<GenerateurFormulaireChampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateurFormulaireChampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateurFormulaireChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
