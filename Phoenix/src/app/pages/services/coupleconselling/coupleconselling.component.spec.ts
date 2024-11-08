import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleconsellingComponent } from './coupleconselling.component';

describe('CoupleconsellingComponent', () => {
  let component: CoupleconsellingComponent;
  let fixture: ComponentFixture<CoupleconsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoupleconsellingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoupleconsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
