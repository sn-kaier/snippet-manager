import { Test, TestingModule } from '@nestjs/testing';
import { DbColorService } from './db-color.service';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Color } from '../../__generated_entities/color';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../../database.module';

describe('DbColorService', () => {
  let service: DbColorService;

  beforeEach(async () => {
    if (service) {
      return;
    }
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), DatabaseModule],
    }).compile();

    service = module.get<DbColorService>(DbColorService);
  });
  it('should create and delete',  () => {
    expect(service).toBeDefined();
  });

  it('should create and delete', async () => {
    const entity: QueryDeepPartialEntity<Color> = {
      color: 'for test',
      name: 'test',
    };
    const insertResult = await service.repository.insert(entity);
    const {name} = insertResult.identifiers[0];
    const insertedColor = await service.repository.findOne({ where: { name } });
    expect(insertedColor).toBeDefined();
    expect(insertedColor.name).toEqual(entity.name);

    const deleteResult = await service.repository.delete({ name });
    const afterDeletedFindResult = await service.repository.findOne({ where: { name } });
    expect(afterDeletedFindResult).toBeUndefined();

  });
});
