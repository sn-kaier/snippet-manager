import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { User } from '../../__generated_entities/user';
import { Repository } from 'typeorm';

const PROVIDER = 'USER_REPOSITORY';
export const dbUserProvider = serviceProvider(PROVIDER, User);

@Injectable()
export class DbUserService {
  constructor(
    @Inject(PROVIDER)
    public readonly userRepository: Repository<User>,
  ) {
  }
}
