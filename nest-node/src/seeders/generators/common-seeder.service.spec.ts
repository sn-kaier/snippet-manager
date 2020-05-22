import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { CommonSeederService } from './common-seeder.service';

describe('CommonSeederService', () => {
  let service: CommonSeederService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [CommonSeederService],
    }).compile();

    service = module.get<CommonSeederService>(CommonSeederService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a uuid', () => {
    const uuid = service.uuid();
    expect(uuid).toBeDefined();
    expect(uuid.length).toBeGreaterThan(10);
    expect(uuid).not.toEqual(service.uuid());
  });

  it('should generate a random sentence', () => {
    const randomSentences = service.randomSentences(2);
    expect(randomSentences).toBeDefined();
    expect(randomSentences.length).toBeGreaterThan(10);
    expect(randomSentences).not.toEqual(service.randomSentences(3));
  });

  it('should generate a random name', () => {
    const name = service.name(3);
    expect(name).toBeDefined();
    expect(name.length).toBeGreaterThan(2);
    expect(name).toMatch(/^[a-zA-Z]+[0-9]+$/);
  });
});
