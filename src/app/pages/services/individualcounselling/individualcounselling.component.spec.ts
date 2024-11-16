import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCounsellingComponent } from './individualCounselling.component';

describe('IndividualCounsellingComponent', () => {
  let component: IndividualCounsellingComponent;
  let fixture: ComponentFixture<IndividualCounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualCounsellingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IndividualCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
