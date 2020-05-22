import { Injectable, Logger } from '@nestjs/common';
import { randomIndex } from './common-seeder.service';
import { gql, GqlRequestService } from '../../gql-request/gql-request.service';
import { ColorInsertInput } from '../../__generated/types';

@Injectable()
export class ColorSeedGeneratorService {
  private logger = new Logger(ColorSeedGeneratorService.name);

  constructor(
    private readonly gqlRequestService: GqlRequestService,
  ) {
  }

  public async saveToDB() {
    try {
      await this.gqlRequestService.adminRequest<{ affectedRows: number }, { colors: ColorInsertInput[] }>(
        gql`
            mutation saveColors($colors: [color_insert_input!]!) {
                addColor(objects: $colors, on_conflict: {update_columns: [name], constraint: color_pkey}) {
                    affected_rows
                }
            }`,
        { colors: this.colors },
      );
    } catch (e) {
      this.logger.error('failed to save color', e.stack, e.message);
    }
  }

  public getRandomColor() {
    const index = randomIndex(this.colors.length);
    return this.colors[index];
  }

  public readonly colors: ColorInsertInput[] = [
    {
      name: 'Black',
      color: 'black',
    },
    {
      name: 'Red',
      color: 'red',
    },
    {
      name: 'Blue',
      color: 'blue',
    },
    {
      name: 'Yellow',
      color: 'yellow',
    },
  ];

}
