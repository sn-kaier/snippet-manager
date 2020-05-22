import { Test, TestingModule } from '@nestjs/testing';
import { AuthorSeedGeneratorService } from './author-seed-generator.service';
import { DatabaseModule } from '../../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SeedersModule } from '../seeders.module';

describe('AuthorSeedGeneratorService', () => {
  let service: AuthorSeedGeneratorService;

  beforeEach(async () => {
    if (service) {
      return;
    }
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), DatabaseModule, SeedersModule],
    }).compile();

    service = module.get<AuthorSeedGeneratorService>(AuthorSeedGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should save and delete user', async () => {
    const { before, after } = await service.saveAuthor();
    expect(before).toBeDefined();
    expect(after).toBeDefined();
    const sizeAfterInsert = service.currentIdsLength;
    const deleteResult = await service.deleteUser(after.authId);
    expect(deleteResult).toBeDefined();
    const sizeAfterDelete = service.currentIdsLength;
    expect(sizeAfterInsert - sizeAfterDelete).toEqual(1);
  });

  it('should load existing author ids', async () => {
    const { after } = await service.saveAuthor();

    const authorIds = service.fetchExistingIds();
    expect(authorIds).toBeDefined();
    expect(authorIds).toBeGreaterThan(0);

    const deleteResult = await service.deleteUser(after.authId);
    expect(deleteResult).toBeDefined();
  });
});
