import { Test, TestingModule } from '@nestjs/testing';
import { DbDocumentLabelService } from './db-document-label.service';

describe('DbDocumentLabelService', () => {
  let service: DbDocumentLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbDocumentLabelService],
    }).compile();

    service = module.get<DbDocumentLabelService>(DbDocumentLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
