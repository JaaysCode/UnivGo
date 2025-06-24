import { Module } from '@nestjs/common';
import { SpacesModuleService } from './spaces.service';
import { SpacesModuleController } from './spaces.controller';

@Module({
  controllers: [SpacesModuleController],
  providers: [SpacesModuleService],
})
export class SpacesModule {}
