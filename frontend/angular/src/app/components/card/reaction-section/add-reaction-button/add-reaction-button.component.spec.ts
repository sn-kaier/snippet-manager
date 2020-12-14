import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddReactionButtonComponent } from './add-reaction-button.component';

describe('AddReactionButtonComponent', () => {
  let component: AddReactionButtonComponent;
  let fixture: ComponentFixture<AddReactionButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReactionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
