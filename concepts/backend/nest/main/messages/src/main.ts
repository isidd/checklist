import { NestFactory } from '@nestjs/core';
import { MessageModule } from './message/message.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000,()=>console.log("application is running on port 5000"));
}

bootstrap();
