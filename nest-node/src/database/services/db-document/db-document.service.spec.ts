import { Test, TestingModule } from '@nestjs/testing';
import { DbDocumentService } from './db-document.service';
import { DatabaseModule } from '../../database.module';
import { ConfigModule } from '@nestjs/config';

describe('DbDocumentService', () => {
  let service: DbDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), DatabaseModule],
    }).compile();

    service = module.get<DbDocumentService>(DbDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
