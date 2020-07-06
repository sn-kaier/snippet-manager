import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionBadgeComponent } from './reaction-badge.component';

describe('ReactionBadgeComponent', () => {
  let component: ReactionBadgeComponent;
  let fixture: ComponentFixture<ReactionBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
