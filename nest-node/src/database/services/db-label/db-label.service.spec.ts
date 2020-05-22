import { Test, TestingModule } from '@nestjs/testing';
import { DbLabelService } from './db-label.service';

describe('DbLabelService', () => {
  let service: DbLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbLabelService],
    }).compile();

    service = module.get<DbLabelService>(DbLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
