import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthorsController } from './authors.controller';
import { AddAuthorPoemHandler } from './handlers/add-author-poem.handler';

@Module({
  imports: [
    CqrsModule,
  ],
  controllers: [AuthorsController],
  providers: [AddAuthorPoemHandler],
})
export class AuthorsModule {}
