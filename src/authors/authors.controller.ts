import { Controller, Logger } from '@nestjs/common';
import { AddAuthorPoemHandler } from './handlers/add-author-poem.handler';
import { AddAuthorPoemCommand } from './commands/add-author-poem.command';
import { CommandBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { AddAuthorPoemDto } from './dtos/add-author-poem-dto';

@Controller('authors')
export class AuthorsController {
  constructor(
    private readonly commandBus: CommandBus,
  ) {}

  @EventPattern(AddAuthorPoemCommand.name)
  async handleUserCreated(data: { value: AddAuthorPoemDto }) {
    try {
        await this.commandBus.execute(new AddAuthorPoemCommand(data.value));
    } catch (e) {
        Logger.error(e.message, AuthorsController.name);
    }
  }
}
