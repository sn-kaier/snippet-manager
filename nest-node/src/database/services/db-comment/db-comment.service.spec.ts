import { Test, TestingModule } from '@nestjs/testing';
import { DbCommentService } from './db-comment.service';

describe('DbCommentService', () => {
  let service: DbCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbCommentService],
    }).compile();

    service = module.get<DbCommentService>(DbCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
