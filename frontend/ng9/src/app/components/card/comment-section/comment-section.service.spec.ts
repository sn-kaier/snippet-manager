import { TestBed } from '@angular/core/testing';

import { CommentSectionService } from './comment-section.service';

describe('CommentSectionService', () => {
  let service: CommentSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
