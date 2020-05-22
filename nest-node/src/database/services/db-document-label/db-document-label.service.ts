import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { DocumentLabel } from '../../__generated_entities/document-label';
import { Repository } from 'typeorm';

const PROVIDER = 'DOCUMENT_LABEL_REPOSITORY';
export const dbDocumentLabelProvider = serviceProvider(PROVIDER, DocumentLabel);

@Injectable()
export class DbDocumentLabelService {
  constructor(
    @Inject(PROVIDER)
    public readonly repository: Repository<DocumentLabel>,
  ) {
  }
}
