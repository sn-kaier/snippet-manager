import { Injectable, Logger } from '@nestjs/common';
import { CommonSeederService, randomIndex, rndInt } from './common-seeder.service';
import { DocumentSeedGeneratorService } from './document-seed-generator.service';
import { LabelSeedGeneratorService } from './label-seed-generator.service';
import { gql, GqlRequestService } from '../../gql-request/gql-request.service';
import { MutationRoot, QueryRoot, UserInsertInput } from '../../__generated/types';

@Injectable()
export class AuthorSeedGeneratorService {

  private logger = new Logger(AuthorSeedGeneratorService.name);

  constructor(private readonly common: CommonSeederService,
              private readonly documentSeedGeneratorService: DocumentSeedGeneratorService,
              private readonly labelSeedGeneratorService: LabelSeedGeneratorService,
              private readonly gqlRequestService: GqlRequestService,
  ) {
  }

  private authorIds: string[] = [];

  generateOne(): Partial<UserInsertInput> {
    return {
      authId: this.common.uuid(),
      name: this.common.name(3),
      id: this.common.uuid(),
    };
  }

  public getRandomId(): string {
    const index = Math.floor(Math.random() * this.authorIds.length);
    return this.authorIds[index];
  }

  public get currentIdsLength() {
    return this.authorIds?.length || 0;
  }

  async saveAuthor() {
    const user = this.generateOne();
    try {

      const res = await this.gqlRequestService.adminRequest<MutationRoot, { user: UserInsertInput }>(
        gql`mutation AddUser($user: user_insert_input!) {
            addUser(objects: [$user]) {
                returning {
                    id
                }
            }
        }`, { user });

      this.authorIds.push(user.authId);
      return {
        before: user,
        after: { ...user, id: res.addUser.returning[0].id },
      };
    } catch (e) {
      this.logger.error('failed to save user', e.stack, e.message);
      throw e;
    }
  }

  async addContentToUser(user: UserInsertInput) {
    // add Labels
    const labels = await this.labelSeedGeneratorService.generateAndSaveMany(user.authId, rndInt(10, 50)());
    const labelIds = labels.map(l => l.id);
    // add Documents
    const countChildren = randomIndex(10);
    for (let i = 0; i < countChildren; i++) {
      await this.documentSeedGeneratorService.saveOneWithChildren(user.authId, labelIds);
    }
  }

  async fetchExistingIds() {
    const existing = await this.gqlRequestService.adminRequest<QueryRoot, void>(
      gql`query UserIds {
          allUsers {
              authId
          }
      }`);
    this.authorIds = existing.allUsers.map(a => a.authId);
    return this.authorIds;
  }

  async deleteUser(authId: string) {
    const deleteResult = await this.gqlRequestService.adminRequest<{ affected_rows: number }, { authId: string }>(
      gql`mutation deleteUser($authId: String!) {
          removeUser(where: {authId: {_eq: $authId}}) {
              affected_rows
          }
      }`, { authId },
    );
    if (deleteResult.affected_rows > 0) {
      const idIndex = this.authorIds.findIndex(id => id === authId);
      if (idIndex >= 0) {
        this.authorIds.splice(idIndex, 1);
      }
    }
    return deleteResult;
  }

}
