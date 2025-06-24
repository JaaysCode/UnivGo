import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpacesModuleService } from './spaces.service';
import { CreateSpacesModuleDto } from './dto/create-spaces-module.dto';
import { UpdateSpacesModuleDto } from './dto/update-spaces-module.dto';

@Controller('spaces-module')
export class SpacesModuleController {
  constructor(private readonly spacesModuleService: SpacesModuleService) {}

  @Post()
  create(@Body() createSpacesModuleDto: CreateSpacesModuleDto) {
    return this.spacesModuleService.create(createSpacesModuleDto);
  }

  @Get()
  findAll() {
    return this.spacesModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spacesModuleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpacesModuleDto: UpdateSpacesModuleDto,
  ) {
    return this.spacesModuleService.update(+id, updateSpacesModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spacesModuleService.remove(+id);
  }
}
