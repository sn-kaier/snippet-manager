import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthorSectionComponent } from './author-section.component';

describe('AuthorSectionComponent', () => {
  let component: AuthorSectionComponent;
  let fixture: ComponentFixture<AuthorSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
