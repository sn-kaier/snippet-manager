import { TestBed } from '@angular/core/testing';

import { PickEmojiService } from './pick-emoji.service';

describe('PickEmojiService', () => {
  let service: PickEmojiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickEmojiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
