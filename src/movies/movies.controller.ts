import { Controller, Get } from '@nestjs/common';
// import { MoviesService } from './movies.service';
import { ScheduleService } from '../scheduler/schedule.service';

@Controller('movies')
export class MoviesController {
  constructor(
    //private readonly moviesService: MoviesService,
    private readonly scheduleService: ScheduleService,
  ) {}

  @Get('generate-qr')
  async generateQRCode(): Promise<string> {
    const qrCodeLink = await this.scheduleService.generateQRCode();
    return `<img src="${qrCodeLink}" alt="QR Code" />`;
  }

  @Get('scanned')
  async getScannedMovies(): Promise<any[]> {
    const movies = await this.scheduleService.generateRandomMovies();
    return movies;
  }
}
