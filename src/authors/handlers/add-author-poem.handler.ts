import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddAuthorPoemCommand } from '../commands/add-author-poem.command';

@CommandHandler(AddAuthorPoemCommand)
export class AddAuthorPoemHandler implements ICommandHandler<AddAuthorPoemCommand> {
  constructor() {}

  async execute(command: AddAuthorPoemCommand): Promise<void> {
    Logger.log(command, AddAuthorPoemHandler.name);
  }
}
