import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsandworkshopsComponent } from './trainingsandworkshops.component';

describe('TrainingsandworkshopsComponent', () => {
  let component: TrainingsandworkshopsComponent;
  let fixture: ComponentFixture<TrainingsandworkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingsandworkshopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingsandworkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
