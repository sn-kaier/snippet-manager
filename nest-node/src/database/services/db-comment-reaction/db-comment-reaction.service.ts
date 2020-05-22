import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { Repository } from 'typeorm';
import { CommentReaction } from '../../__generated_entities/comment-reaction';

const PROVIDER = 'COMMENT_REACTION_REPOSITORY';
export const dbCommentReactionProvider = serviceProvider(PROVIDER, CommentReaction);

@Injectable()
export class DbCommentReactionService {
  constructor(
    @Inject(PROVIDER)
    public readonly commentReactionRepository: Repository<CommentReaction>,
  ) {
  }
}
