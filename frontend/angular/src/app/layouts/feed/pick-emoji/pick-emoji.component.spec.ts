import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PickEmojiComponent } from './pick-emoji.component';

describe('PickEmojiComponent', () => {
  let component: PickEmojiComponent;
  let fixture: ComponentFixture<PickEmojiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
