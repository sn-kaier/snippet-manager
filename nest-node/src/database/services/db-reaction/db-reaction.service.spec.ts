import { Test, TestingModule } from '@nestjs/testing';
import { DbReactionService } from './db-reaction.service';

describe('DbReactionService', () => {
  let service: DbReactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbReactionService],
    }).compile();

    service = module.get<DbReactionService>(DbReactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
