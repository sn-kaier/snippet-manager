import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { DocumentReaction } from '../../__generated_entities/document-reaction';
import { Repository } from 'typeorm';

const PROVIDER = 'DOCUMENT_REACTION_REPOSITORY';
export const dbDocumentReactionProvider = serviceProvider(PROVIDER, DocumentReaction);

@Injectable()
export class DbDocumentReactionService {
  constructor(
    @Inject(PROVIDER)
    public readonly repository: Repository<DocumentReaction>,
  ) {
  }
}
