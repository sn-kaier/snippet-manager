import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionSectionComponent } from './reaction-section.component';

describe('ReactionSectionComponent', () => {
  let component: ReactionSectionComponent;
  let fixture: ComponentFixture<ReactionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
