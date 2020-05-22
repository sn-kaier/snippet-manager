import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { Label } from '../../__generated_entities/label';
import { Repository } from 'typeorm';

const PROVIDER = 'LABEL_REPOSITORY';
export const dbLabelProvider = serviceProvider(PROVIDER, Label);

@Injectable()
export class DbLabelService {
  constructor(
    @Inject(PROVIDER)
    public readonly repository: Repository<Label>,
  ) {
  }
}
