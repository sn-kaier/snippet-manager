import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickEmojiComponent } from './pick-emoji.component';

describe('PickEmojiComponent', () => {
  let component: PickEmojiComponent;
  let fixture: ComponentFixture<PickEmojiComponent>;

  beforeEach(async(() => {
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
