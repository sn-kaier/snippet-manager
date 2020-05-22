import { Test, TestingModule } from '@nestjs/testing';
import { DbFollowService } from './db-follow.service';

describe('DbFollowService', () => {
  let service: DbFollowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbFollowService],
    }).compile();

    service = module.get<DbFollowService>(DbFollowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
