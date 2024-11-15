import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilytherapyComponent } from './familytherapy.component';

describe('FamilytherapyComponent', () => {
  let component: FamilytherapyComponent;
  let fixture: ComponentFixture<FamilytherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilytherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilytherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
