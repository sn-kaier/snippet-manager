import { Injectable, Logger } from '@nestjs/common';
import { CommonSeederService } from './common-seeder.service';
import { AuthorReaction, ReactionSeedGeneratorService } from './reaction-seed-generator.service';
import { gql, GqlRequestService } from '../../gql-request/gql-request.service';
import { CommentReactionInsertInput } from '../../__generated/types';

@Injectable()
export class CommentReactionSeedGeneratorService {

  private logger = new Logger(CommentReactionSeedGeneratorService.name);

  constructor(private readonly common: CommonSeederService,
              private readonly emojiService: ReactionSeedGeneratorService,
              private readonly gqlRequestService: GqlRequestService) {
  }

  public generateMany(attempts: number, commentId: string) {
    return this.emojiService.getMany(attempts).map<CommentReactionInsertInput>(entry => this.generateOne(entry, commentId));
  }

  public async generateAndSaveMany(attempts: number, commentId: string) {
    const reactions = this.generateMany(attempts, commentId);
    try {
      return this.gqlRequestService.adminRequest<{ affected_rows: number }, { reactions: CommentReactionInsertInput[] }>(
        gql`mutation SaveCommentReactions($reactions: [comment_reaction_insert_input!]!) {
            addCommentReaction(objects: $reactions) {
                affected_rows
            }
        }`, { reactions });
    } catch (e) {
      this.logger.error('failed to save many comment reaction', e.stack, e.message);
      throw e;
    }
  }

  private generateOne(ar: AuthorReaction, commentId: string): CommentReactionInsertInput {
    return {
      authorId: ar.authorId,
      reactionId: ar.reaction.htmlCode,
      commentId
    };
  }
}
