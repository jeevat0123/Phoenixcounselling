import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinecounselingComponent } from './onlinecounseling.component';

describe('OnlinecounselingComponent', () => {
  let component: OnlinecounselingComponent;
  let fixture: ComponentFixture<OnlinecounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlinecounselingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlinecounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
