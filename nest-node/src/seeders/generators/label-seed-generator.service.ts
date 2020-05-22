import { Injectable, Logger } from '@nestjs/common';
import { CommonSeederService, Keys, sequence } from './common-seeder.service';
import { ColorSeedGeneratorService } from './color-seed-generator.service';
import { Label } from '../../database/__generated_entities/label';
import { DbLabelService } from '../../database/services/db-label/db-label.service';

export type KLabel = Keys<Keys<Label, 'author'>, 'colorName'>;

@Injectable()
export class LabelSeedGeneratorService {
  private logger = new Logger(LabelSeedGeneratorService.name);

  constructor(private readonly common: CommonSeederService,
              private readonly colors: ColorSeedGeneratorService,
              private readonly dbLabelService: DbLabelService,
              ) {
  }

  public async generateAndSaveMany(authorId: string, count: number) {
    const labels = sequence(count).map(() => this.generateOne(authorId));
    try {
      await this.dbLabelService.repository.save(labels as any);
      return labels;
    } catch (e) {
      this.logger.error('failed to save many labels', e.stack, e.message);
      throw e;
    }
  }

  generateOne(authorId: string): KLabel {
    const id = this.common.uuid();
    return {
      author: authorId,
      label: this.common.name(0),
      colorName: this.colors.getRandomColor().name,
      id,
    };
  }
}
