import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { Reaction } from '../../__generated_entities/reaction';
import { Repository } from 'typeorm';

const PROVIDER = 'REACTION_REPOSITORY';
export const dbReactionProvider = serviceProvider(PROVIDER, Reaction);

@Injectable()
export class DbReactionService {
  constructor(
    @Inject(PROVIDER)
    public readonly reactionRepository: Repository<Reaction>,
  ) {
  }
}
