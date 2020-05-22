import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { AuthorReaction, ReactionSeedGeneratorService } from './reaction-seed-generator.service';
import { gql, GqlRequestService } from '../../gql-request/gql-request.service';
import { DocumentReactionInsertInput } from '../../__generated/types';

@Injectable()
export class DocumentReactionSeedGeneratorService {
  private logger = new Logger(DocumentReactionSeedGeneratorService.name);

  constructor(
    @Inject(forwardRef(() => ReactionSeedGeneratorService))
    private readonly emojiService: ReactionSeedGeneratorService,
    private readonly gqlRequestService: GqlRequestService,
  ) {
  }

  private generateMany(documentId: string, attempts: number) {
    return this.emojiService.getMany(attempts).map(entry => this.generateOne(documentId, entry));
  }

  private generateOne(documentId: string, ar: AuthorReaction): DocumentReactionInsertInput {
    return {
      documentId,
      authorId: ar.authorId,
      reactionId: this.emojiService.getRandom().htmlCode,
    };
  }

  public async generateAndSaveMany(documentId: string, attempts: number) {
    const reactions = this.generateMany(documentId, attempts);
    try {
      return await this.gqlRequestService.adminRequest<{ affected_rows: number }, { reactions: DocumentReactionInsertInput[] }>(
        gql`mutation SaveReactions($reactions: [document_reaction_insert_input!]!) {
            addDocumentReaction(objects: $reactions) {
                affected_rows
            }
        }`,
        { reactions },
      );
    } catch (e) {
      this.logger.error('failed to save many reactions', e.stack, e.message);
      throw e;
    }
  }

}
