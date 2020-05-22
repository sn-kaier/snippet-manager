import { Test, TestingModule } from '@nestjs/testing';
import { DbDocumentContentService } from './db-document-content.service';

describe('DbDocumentContentService', () => {
  let service: DbDocumentContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbDocumentContentService],
    }).compile();

    service = module.get<DbDocumentContentService>(DbDocumentContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
