// Clear Node.js module cache
Object.keys(require.cache).forEach(function(key) {
  delete require.cache[key];
});

// Your application code
import * as app from './main';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
