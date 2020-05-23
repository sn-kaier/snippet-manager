import { Module } from '@nestjs/common';
import { SeedersService } from './seeders.service';
import { GqlRequestModule } from '../gql-request/gql-request.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentSeedGeneratorService } from './generators/document-seed-generator.service';
import { CommonSeederService } from './generators/common-seeder.service';
import { AuthorSeedGeneratorService } from './generators/author-seed-generator.service';
import { CommentSeedGeneratorService } from './generators/comment-seed-generator.service';
import { LabelSeedGeneratorService } from './generators/label-seed-generator.service';
import { ColorSeedGeneratorService } from './generators/color-seed-generator.service';
import { ReactionSeedGeneratorService } from './generators/reaction-seed-generator.service';
import { DocumentReactionSeedGeneratorService } from './generators/document-reaction-seed-generator.service';
import { CommentReactionSeedGeneratorService } from './generators/comment-reaction-seed-generator.service';

@Module({
  imports: [GqlRequestModule, ConfigModule.forRoot()],
  providers: [
    SeedersService,
    DocumentSeedGeneratorService,
    CommonSeederService,
    AuthorSeedGeneratorService,
    CommentSeedGeneratorService,
    LabelSeedGeneratorService,
    ColorSeedGeneratorService,
    ReactionSeedGeneratorService,
    DocumentReactionSeedGeneratorService,
    CommentReactionSeedGeneratorService,
  ],
  exports: [
    SeedersService,
    DocumentSeedGeneratorService,
    CommonSeederService,
    AuthorSeedGeneratorService,
    CommentSeedGeneratorService,
    LabelSeedGeneratorService,
    ColorSeedGeneratorService,
    ReactionSeedGeneratorService,
    DocumentReactionSeedGeneratorService,
    CommentReactionSeedGeneratorService,
  ],
})
export class SeedersModule {}
