import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaComponent } from './epa.component';

describe('EpaComponent', () => {
  let component: EpaComponent;
  let fixture: ComponentFixture<EpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
