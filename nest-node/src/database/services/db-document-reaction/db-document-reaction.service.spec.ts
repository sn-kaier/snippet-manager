import { Test, TestingModule } from '@nestjs/testing';
import { DbDocumentReactionService } from './db-document-reaction.service';

describe('DbDocumentReactionService', () => {
  let service: DbDocumentReactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbDocumentReactionService],
    }).compile();

    service = module.get<DbDocumentReactionService>(DbDocumentReactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
