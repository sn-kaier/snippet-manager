import { Test, TestingModule } from '@nestjs/testing';
import { DbCommentReactionService } from './db-comment-reaction.service';

describe('DbCommentReactionService', () => {
  let service: DbCommentReactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbCommentReactionService],
    }).compile();

    service = module.get<DbCommentReactionService>(DbCommentReactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
