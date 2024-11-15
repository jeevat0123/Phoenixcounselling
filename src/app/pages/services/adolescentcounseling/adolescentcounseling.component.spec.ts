import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescentcounselingComponent } from './adolescentcounseling.component';

describe('AdolescentcounselingComponent', () => {
  let component: AdolescentcounselingComponent;
  let fixture: ComponentFixture<AdolescentcounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdolescentcounselingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdolescentcounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
