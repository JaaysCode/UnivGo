import { PartialType } from '@nestjs/mapped-types';
import { CreateSpacesModuleDto } from './create-spaces-module.dto';

export class UpdateSpacesModuleDto extends PartialType(CreateSpacesModuleDto) {}
