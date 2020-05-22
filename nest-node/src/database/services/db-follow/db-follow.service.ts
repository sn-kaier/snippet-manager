import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { Follow } from '../../__generated_entities/follow';
import { Repository } from 'typeorm';

const PROVIDER = 'FOLLOW_REPOSITORY';
export const dbFollowProvider = serviceProvider(PROVIDER, Follow);

@Injectable()
export class DbFollowService {
  constructor(
    @Inject(PROVIDER)
    private readonly followRepository: Repository<Follow>,
  ) {
  }
}
