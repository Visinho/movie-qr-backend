import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import * as qr from 'qrcode';
import * as moviesJson from '../movies.json';

@Injectable()
export class ScheduleService {
  private qrCodeLink = '';
  private movies: any[] = [];

  constructor() {
    this.initialSetup();
  }

  @Cron('*/10 * * * * *') // Run every 10 seconds
  async updateQRCode() {
    this.qrCodeLink = await this.generateQRCode();
  }

  @Interval(60000) // Run every 60 seconds
  async updateMovies() {
    this.movies = await this.generateRandomMovies();
  }

  @Timeout(5000) // Run once, 5 seconds after instantiation
  async initialSetup() {
    try {
      this.movies = moviesJson;
      console.log('Movies initialized:', this.movies);
    } catch (error) {
      console.error('Error loading movies data:', error);
      this.movies = [];
    }
    this.qrCodeLink = await this.generateQRCode();
  }

  async generateQRCode(): Promise<string> {
    const link = 'localhost:3000/movies/qr-code';
    return qr.toDataURL(link);
  }

  async generateRandomMovies(): Promise<any[]> {
    if (!this.movies || this.movies.length === 0) {
      return [];
    }

    const shuffled = this.movies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }
}
 