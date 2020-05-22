import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { DocumentContent } from '../../__generated_entities/document-content';
import { Repository } from 'typeorm';

const PROVIDER = 'DOCUMENT_CONTENT_REPOSITORY';
export const dbDocumentContentProvider = serviceProvider(PROVIDER, DocumentContent);

@Injectable()
export class DbDocumentContentService {
  constructor(
    @Inject(PROVIDER)
    private readonly documentContentRepository: Repository<DocumentContent>,
  ) {
  }
}
