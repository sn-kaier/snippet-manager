import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { CommonSeederService, rndInt } from './common-seeder.service';
import { CommentReactionSeedGeneratorService } from './comment-reaction-seed-generator.service';
import { AuthorSeedGeneratorService } from './author-seed-generator.service';
import { gql, GqlRequestService } from '../../gql-request/gql-request.service';
import { Comment_Insert_Input } from '../../__generated/types';

@Injectable()
export class CommentSeedGeneratorService {
  private logger = new Logger(CommentSeedGeneratorService.name);

  constructor(
    private readonly common: CommonSeederService,
    @Inject(forwardRef(() => CommentReactionSeedGeneratorService))
    private readonly reactionService: CommentReactionSeedGeneratorService,
    @Inject(forwardRef(() => AuthorSeedGeneratorService))
    private readonly authorService: AuthorSeedGeneratorService,
    private readonly gqlRequestService: GqlRequestService,
  ) {
  }

  generateOne(documentId: string): Comment_Insert_Input {
    const authorId = this.authorService.getRandomId();
    const commentId = this.common.uuid();
    return {
      comment: this.common.randomSentences(rndInt(2, 8)()),
      authorId,
      documentId,
      id: commentId,
    };
  }

  private async generateAndSaveOne(documentId: string) {
    const comment = this.generateOne(documentId);
    try {
      await this.gqlRequestService.adminRequest<{ affected_rows: number }, { comment: Comment_Insert_Input }>(
        gql`mutation AddComment($comment: comment_insert_input!) {
            addComment(objects: [$comment]) {
                affected_rows
            }
        }`,
        { comment },
      );
      await this.reactionService.generateAndSaveMany(rndInt(0, 3)(), comment.id);
    } catch (e) {
      this.logger.error('failed to save comment', e.stack, e.message);
    }
  }

  public async generateAndSaveWithReactions(documentId: string, count: number) {
    for (let i = 0; i < count; i++) {
      await this.generateAndSaveOne(documentId);
    }
  }
}
