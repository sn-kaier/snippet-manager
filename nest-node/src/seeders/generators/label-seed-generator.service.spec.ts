import { Test, TestingModule } from '@nestjs/testing';
import { LabelSeedGeneratorService } from './label-seed-generator.service';
import { DatabaseModule } from '../../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SeedersModule } from '../seeders.module';

describe('LabelSeedGeneratorService', () => {
  let service: LabelSeedGeneratorService;

  beforeEach(async () => {
    if (service) {
      return;
    }
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), DatabaseModule, SeedersModule],
    }).compile();

    service = module.get<LabelSeedGeneratorService>(LabelSeedGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should save and delete user', async () => {
    const authorId = 'ceb2a512-fced-4a83-bd3f-6a9544e45566';
    const savedLabels = await service.generateAndSaveMany(authorId, 1);
    expect(savedLabels).toBeDefined();
  });

});
