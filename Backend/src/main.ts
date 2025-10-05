import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // 👈 프론트엔드(Vue)랑 연결할 때 필요
  await app.listen(5173);
  console.log('🚀 Server is running on http://localhost:3000');
}
bootstrap();
