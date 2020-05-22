import { Test, TestingModule } from '@nestjs/testing';
import { CommentReactionSeedGeneratorService } from './comment-reaction-seed-generator.service';
import { DatabaseModule } from '../../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SeedersModule } from '../seeders.module';

describe('CommentReactionSeedGeneratorService', () => {
  let service: CommentReactionSeedGeneratorService;

  beforeEach(async () => {
    if (service) {
      return;
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentReactionSeedGeneratorService],
      imports: [ConfigModule.forRoot(), DatabaseModule, SeedersModule],
    }).compile();

    service = module.get<CommentReactionSeedGeneratorService>(CommentReactionSeedGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


});
