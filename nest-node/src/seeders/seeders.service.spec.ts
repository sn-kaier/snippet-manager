import { Test, TestingModule } from '@nestjs/testing';
import { SeedersService } from './seeders.service';

import { v4 } from 'uuid';
import { GqlRequestModule } from '../gql-request/gql-request.module';
import { ConfigModule } from '@nestjs/config';
import { SeedersModule } from './seeders.module';

describe('SeedersService', () => {
  let service: SeedersService;

  beforeEach(async () => {
    if (service) {
      return;
    }
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), GqlRequestModule, SeedersModule],
    }).compile();

    service = module.get<SeedersService>(SeedersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate uuid', () => {
    const uuid = v4();
    expect(uuid).toBeDefined();
    expect(uuid.length).toBeGreaterThan(10);
    expect(uuid).not.toEqual(v4());
  });

  it('should generate author seed', async () => {
    const limited = await service.seedOnce();
    expect(limited).toBeDefined();
  }, 1000 * 60 * 2);

});
