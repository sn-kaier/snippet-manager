import { Inject, Injectable } from '@nestjs/common';
import { serviceProvider } from '../service-provider';
import { Document } from '../../__generated_entities/document';
import { Repository } from 'typeorm';

const PROVIDER = 'DOCUMENT_REPOSITORY';
export const dbDocumentProvider = serviceProvider(PROVIDER, Document);

@Injectable()
export class DbDocumentService {
  constructor(
    @Inject(PROVIDER)
    public readonly documentRepository: Repository<Document>,
  ) {
  }

}
