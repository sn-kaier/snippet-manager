import { Module } from '@nestjs/common';
import { GqlRequestService } from './gql-request.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [GqlRequestService],
  exports: [GqlRequestService],
})
export class GqlRequestModule {}
