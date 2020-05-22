import { Inject, Injectable } from '@nestjs/common';
import { Color } from '../../__generated_entities/color';
import { serviceProvider } from '../service-provider';
import { Repository } from 'typeorm';

const PROVIDER = 'COLOR_REPOSITORY';
export const dbColorProvider = serviceProvider(PROVIDER, Color);

@Injectable()
export class DbColorService {
  constructor(
    @Inject(PROVIDER)
    public readonly repository: Repository<Color>,
  ) {
  }

}
