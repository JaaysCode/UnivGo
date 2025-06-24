import { Injectable } from '@nestjs/common';
import { CreateSpacesModuleDto } from './dto/create-spaces-module.dto';
import { UpdateSpacesModuleDto } from './dto/update-spaces-module.dto';

@Injectable()
export class SpacesModuleService {
  create(createSpacesModuleDto: CreateSpacesModuleDto) {
    return 'This action adds a new spacesModule';
  }

  findAll() {
    return `This action returns all spacesModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spacesModule`;
  }

  update(id: number, updateSpacesModuleDto: UpdateSpacesModuleDto) {
    return `This action updates a #${id} spacesModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} spacesModule`;
  }
}
