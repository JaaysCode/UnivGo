import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ReservationsModule } from './reservations/reservations.module';
import { SpacesModule } from './spaces/spaces.module';

@Module({
  imports: [
    UsersModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Denverelgato1612*',
      database: 'UnivGo',
      autoLoadEntities: true,
      synchronize: true,
    }),

    AuthModule,

    ReservationsModule,

    SpacesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
