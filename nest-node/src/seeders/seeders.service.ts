import { Injectable } from '@nestjs/common';
import { GqlRequestService } from '../gql-request/gql-request.service';
import { AuthorSeedGeneratorService } from './generators/author-seed-generator.service';
import { ColorSeedGeneratorService } from './generators/color-seed-generator.service';
import { ReactionSeedGeneratorService } from './generators/reaction-seed-generator.service';

@Injectable()
export class SeedersService {
  constructor(
    private readonly requestService: GqlRequestService,
    private readonly authorSeedGeneratorService: AuthorSeedGeneratorService,
    private readonly colorService: ColorSeedGeneratorService,
    private readonly reactionService: ReactionSeedGeneratorService,
  ) {
  }

  private seeding = false;

  public get isSeeding() {
    return this.seeding;
  }

  async seedOnce() {
    this.seeding = true;
    await Promise.all([
      this.colorService.saveToDB(),
      this.reactionService.saveToDB(),
    ]);
    const countUsersToGenerate = 100;
    const users = [];
    await this.authorSeedGeneratorService.fetchExistingIds();
    for (let i = 0; i < countUsersToGenerate; i++) {
      const { before } = await this.authorSeedGeneratorService.saveAuthor();
      users.push(before);
    }

    for (const user of users) {
      await this.authorSeedGeneratorService.addContentToUser(user);
    }
    this.seeding = false;
  }

}
