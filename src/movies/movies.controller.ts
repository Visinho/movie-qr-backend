import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';

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

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  getRandomMovies(): any[] {
    const numberOfMovies = 10;
    const randomMovies = [];
    const moviesCopy = [...movieList]; 

    while (randomMovies.length < numberOfMovies && moviesCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * moviesCopy.length);
      randomMovies.push(moviesCopy.splice(randomIndex, 1)[0]); 
    }

    return randomMovies;
  }

  @Get('generate-qr')
  async generateQRCode(): Promise<string> {
    const movieData = this.getRandomMovies();
    const qrCodeData = JSON.stringify(movieData);
    const qrCodeUrl = await this.moviesService.generateQRCode(qrCodeData);
    return qrCodeUrl;
  }
}
