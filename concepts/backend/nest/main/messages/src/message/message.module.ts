import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { MessageService } from './message.service';
import { TestModule } from 'src/test/test.module';

@Module({
  imports : [TestModule],
  controllers: [MessageController],
  providers : [MessageRepository, MessageService]
})
export class MessageModule {}
