import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'author',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'author-consumer',
      },
    },
  });
  await app.listen(() => { Logger.log(`Authors service is lisening.`) });
}
bootstrap();
