import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { CommonSeederService, Keys, pick, randomIndex, rndBoolean, rndInt, rndPow } from './common-seeder.service';
import { CommentSeedGeneratorService } from './comment-seed-generator.service';
import { AuthorSeedGeneratorService } from './author-seed-generator.service';
import { DocumentReactionSeedGeneratorService } from './document-reaction-seed-generator.service';
import { Document } from '../../database/__generated_entities/document';
import { DbDocumentService } from '../../database/services/db-document/db-document.service';
import { DbDocumentLabelService } from '../../database/services/db-document-label/db-document-label.service';
import { DocumentLabel } from '../../database/__generated_entities/document-label';
import { gql, GqlRequestService } from '../../gql-request/gql-request.service';
import { Document_Insert_Input, Mutation_Root } from '../../__generated/types';

export type KDocument = Keys<Keys<Keys<DocumentLabel, 'author'>, 'document'>, 'label'>;

@Injectable()
export class DocumentSeedGeneratorService {

  private logger = new Logger(DocumentSeedGeneratorService.name);

  constructor(private readonly commentGen: CommentSeedGeneratorService,
              private readonly reactionGen: DocumentReactionSeedGeneratorService,
              private readonly common: CommonSeederService,
              @Inject(forwardRef(() => AuthorSeedGeneratorService))
              private readonly authorSeedGeneratorService: AuthorSeedGeneratorService,
              private readonly dbDocumentService: DbDocumentService,
              private readonly dbDocumentLabelService: DbDocumentLabelService,
              private readonly gqlRequestService: GqlRequestService,
  ) {
  }

  private generateOne(authorId: string): Document_Insert_Input {
    const allowComments = rndBoolean();

    return {
      id: this.common.uuid(),
      allowComments,
      title: this.common.name(1),
      description: this.common.randomSentences(2),
      authorId,
    };
  }

  public async saveOneWithChildren(authorId: string, labelIds: string[]) {
    const doc = this.generateOne(authorId);

    await this.gqlRequestService.adminRequest<Mutation_Root, { document: Document_Insert_Input }>(
      gql`
          mutation AddDocument($document: document_insert_input!) {
              addDocument(objects: [$document]) {
                  affected_rows
              }
          }
      `, { document: doc });
    if (doc.allowComments) {
      // add comments
      await this.commentGen.generateAndSaveWithReactions(doc.id, rndInt(0, 10)());
      // add reactions
      await this.reactionGen.generateAndSaveMany(doc.id, rndPow(2000, 8));
    }

    // add random labels
    const docLabels = pick(labelIds, randomIndex(labelIds.length)).map<Document_Insert_Input>((labelId: string) => ({
      authorId,
      documentId: doc.id,
      labelId,
    }));
    try {
      await this.gqlRequestService.adminRequest<Mutation_Root, { docLabels: Document_Insert_Input[] }>(
        gql`mutation addDocLabels($docLabels: [document_label_insert_input!]!) {
            addDocumentLabel(objects: $docLabels) {
                affected_rows
            }
        }`,
        { docLabels },
      );
    } catch (e) {
      this.logger.error('failed to save docLabels', e.stack, e.message);
    }
  }
}
