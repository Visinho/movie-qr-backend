import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from 'src/scheduler/schedule.service';

@Controller('qr-code')
export class QrCodeController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  async getQRCode(): Promise<string> {
    return this.scheduleService.generateQRCode().then(qrCodeLink => `<img src="${qrCodeLink}" alt="QR Code" />`);
  }

  @Get('movies')
  async getMovies(): Promise<any[]> {
    return this.scheduleService.generateRandomMovies();
  }
}
