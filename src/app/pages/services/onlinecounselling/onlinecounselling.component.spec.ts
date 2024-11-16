import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCounsellingComponent } from './onlineCounselling.component';

describe('OnlineCounsellingComponent', () => {
  let component: OnlineCounsellingComponent;
  let fixture: ComponentFixture<OnlineCounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineCounsellingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OnlineCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
