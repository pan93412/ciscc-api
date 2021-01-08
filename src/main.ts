import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      methods: ['GET', 'POST', 'OPTIONS'],
      origin: true,
    },
  });

  // rate limit
  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000, // 1 minutes
      max: 12, // limit each IP to 12 requests per windowMs
               // Everyone can send averagely 1 message in 5 second.
    }),
  );
  app.set('trust proxy', 1);
  await app.listen(3000);
}
bootstrap();
