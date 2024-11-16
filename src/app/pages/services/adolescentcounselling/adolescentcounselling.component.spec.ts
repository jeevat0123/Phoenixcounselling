import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescentCounsellingComponent } from './adolescentCounselling.component';

describe('AdolescentCounsellingComponent', () => {
  let component: AdolescentCounsellingComponent;
  let fixture: ComponentFixture<AdolescentCounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdolescentCounsellingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdolescentCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
