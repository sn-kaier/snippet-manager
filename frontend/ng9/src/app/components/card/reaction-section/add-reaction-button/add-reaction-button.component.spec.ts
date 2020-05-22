import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactionButtonComponent } from './add-reaction-button.component';

describe('AddReactionButtonComponent', () => {
  let component: AddReactionButtonComponent;
  let fixture: ComponentFixture<AddReactionButtonComponent>;

  beforeEach(async(() => {
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
