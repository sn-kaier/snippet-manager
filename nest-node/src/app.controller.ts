import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SeedersService } from './seeders/seeders.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly seedService: SeedersService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('startSeed')
  startSeed(): string {
    if (!this.seedService.isSeeding) {
      this.seedService.seedOnce().then();
      return 'started seeding';
    }
    return 'is already seeding';
  }
}
