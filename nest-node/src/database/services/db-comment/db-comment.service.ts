import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { Comment } from '../../__generated_entities/comment';
import { Repository } from 'typeorm';

const PROVIDER = 'COMMENT_REPOSITORY';
export const dbCommentProvider = serviceProvider(PROVIDER, Comment);

@Injectable()
export class DbCommentService {
  constructor(
    @Inject(PROVIDER)
    public readonly commentRepository: Repository<Comment>,
  ) {
  }
}
