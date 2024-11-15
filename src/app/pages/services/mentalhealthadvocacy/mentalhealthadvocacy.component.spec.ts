import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalhealthadvocacyComponent } from './mentalhealthadvocacy.component';

describe('MentalhealthadvocacyComponent', () => {
  let component: MentalhealthadvocacyComponent;
  let fixture: ComponentFixture<MentalhealthadvocacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalhealthadvocacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalhealthadvocacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
