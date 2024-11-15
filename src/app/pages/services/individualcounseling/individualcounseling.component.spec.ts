import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualcounselingComponent } from './individualcounseling.component';

describe('IndividualcounselingComponent', () => {
  let component: IndividualcounselingComponent;
  let fixture: ComponentFixture<IndividualcounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualcounselingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualcounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
