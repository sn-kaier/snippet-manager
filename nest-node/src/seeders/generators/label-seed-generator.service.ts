import { Injectable, Logger } from '@nestjs/common';
import { CommonSeederService, sequence } from './common-seeder.service';
import { ColorSeedGeneratorService } from './color-seed-generator.service';
import { LabelInsertInput } from '../../__generated/types';
import { gql, GqlRequestService } from '../../gql-request/gql-request.service';

@Injectable()
export class LabelSeedGeneratorService {
  private logger = new Logger(LabelSeedGeneratorService.name);

  constructor(private readonly common: CommonSeederService,
              private readonly colors: ColorSeedGeneratorService,
              private readonly gqlRequestService: GqlRequestService,
              ) {
  }

  public async generateAndSaveMany(authorId: string, count: number) {
    const labels = sequence(count).map(() => this.generateOne(authorId));
    try {
      await this.gqlRequestService.adminRequest<{ affected_rows: number }, { labels: LabelInsertInput[] }>(
        gql`mutation AddLabel($labels: [label_insert_input!]!) {
            addLabel(objects: $labels) {
                affected_rows
            }
        }`,
        { labels },
      );

      return labels;
    } catch (e) {
      this.logger.error('failed to save many labels', e.stack, e.message);
      throw e;
    }
  }

  generateOne(authorId: string): LabelInsertInput {
    const id = this.common.uuid();
    return {
      authorId,
      label: this.common.name(0),
      colorName: this.colors.getRandomColor().name,
      id,
    };
  }
}
