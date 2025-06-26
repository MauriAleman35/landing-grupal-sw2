import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTermsConditionsComponent } from './landing-terms-conditions.component';

describe('LandingTermsConditionsComponent', () => {
  let component: LandingTermsConditionsComponent;
  let fixture: ComponentFixture<LandingTermsConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingTermsConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
