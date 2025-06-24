import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from '../roles/roles.module';
import { Users } from './entities/user.entity';

@Module({
  imports: [RolesModule, TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  exports: [UsersService, Users],
})
export class UsersModule {}
