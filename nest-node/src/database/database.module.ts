import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { dbColorProvider, DbColorService } from './services/db-color/db-color.service';
import { dbCommentProvider, DbCommentService } from './services/db-comment/db-comment.service';
import { dbDocumentProvider, DbDocumentService } from './services/db-document/db-document.service';
import {
  dbDocumentContentProvider,
  DbDocumentContentService,
} from './services/db-document-content/db-document-content.service';
import {
  dbDocumentLabelProvider,
  DbDocumentLabelService,
} from './services/db-document-label/db-document-label.service';
import {
  dbDocumentReactionProvider,
  DbDocumentReactionService,
} from './services/db-document-reaction/db-document-reaction.service';
import { dbFollowProvider, DbFollowService } from './services/db-follow/db-follow.service';
import { dbLabelProvider, DbLabelService } from './services/db-label/db-label.service';
import { dbReactionProvider, DbReactionService } from './services/db-reaction/db-reaction.service';
import { dbUserProvider, DbUserService } from './services/db-user/db-user.service';
import { ConfigModule } from '@nestjs/config';
import {
  dbCommentReactionProvider,
  DbCommentReactionService,
} from './services/db-comment-reaction/db-comment-reaction.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [...databaseProviders,
    dbColorProvider, DbColorService,
    dbCommentProvider, DbCommentService,
    dbCommentReactionProvider, DbCommentReactionService,
    dbDocumentProvider, DbDocumentService,
    dbDocumentContentProvider, DbDocumentContentService,
    dbDocumentLabelProvider, DbDocumentLabelService,
    dbDocumentReactionProvider, DbDocumentReactionService,
    dbFollowProvider, DbFollowService,
    dbLabelProvider, DbLabelService,
    dbReactionProvider, DbReactionService,
    dbUserProvider, DbUserService,
  ],
  exports: [...databaseProviders,
    DbColorService,
    DbCommentService,
    DbCommentReactionService,
    DbDocumentContentService,
    DbDocumentService,
    DbDocumentLabelService,
    DbDocumentReactionService,
    DbFollowService,
    DbLabelService,
    DbReactionService,
    DbUserService],
})
export class DatabaseModule {
}
