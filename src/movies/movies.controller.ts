import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';

function shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('generate-qr')
  async generateQRCode(): Promise<string> {
    const movieList = [
          [
              {
                "Title": "Avatar",
              },
              {
                "Title": "I Am Legend",
              },
              {
                "Title": "300",
              },
              {
                "Title": "The Avengers",
              },
              {
                "Title": "The Wolf of Wall Street",
              },
              {
                "Title": "Interstellar",
              },
              {
                "Title": "Game of Thrones",
              },
              {
                "Title": "Vikings",
              },
              {
                "Title": "Gotham",
              },
              {
                "Title": "Power",
              },
              {
                "Title": "Narcos",
              },
              {
                "Title": "Breaking Bad",
              },
              {
                "ComingSoon": true,
              },
              {
                "ComingSoon": true,
                "Title": "Rogue One: A Star Wars Story",
              },
              {
                "ComingSoon": true,
                "Title": "Assassin's Creed",
              },
              {
                "ComingSoon": true,
                "Title": "Luke Cage",
              }
            ]
      ];

    const numberOfMovies = 10;
    const shuffledMovies = shuffleArray(movieList); // Shuffle the array
    const randomMovies = shuffledMovies.slice(0, numberOfMovies); // Select a subset of movies
    const qrCodeData = JSON.stringify(randomMovies);
    const qrCodeUrl = await this.moviesService.generateQRCode(qrCodeData);
    return qrCodeUrl;
  }
}

