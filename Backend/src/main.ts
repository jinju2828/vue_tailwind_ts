import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // 프론트엔드와 연동할 때 CORS 허용
  await app.listen(3000);
}
bootstrap();
