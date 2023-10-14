import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MoviesModule} from './movies/movies.module';
// import { ScheduleModule } from '@nestjs/schedule';
import { QrCodeController } from './qrGenerate/qrGenerate.controller';
import { ScheduleService } from './scheduler/schedule.service';



@Module({
  imports: [],
  controllers: [AppController, QrCodeController],
  providers: [AppService, ScheduleService],
})
export class AppModule {}
