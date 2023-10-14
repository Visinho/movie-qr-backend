import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ScheduleService } from './scheduler/schedule.service';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService, ScheduleService],
})
export class AppModule {}
