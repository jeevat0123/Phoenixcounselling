import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouptherapyComponent } from './grouptherapy.component';

describe('GrouptherapyComponent', () => {
  let component: GrouptherapyComponent;
  let fixture: ComponentFixture<GrouptherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrouptherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrouptherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
