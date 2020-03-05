import { ICommand } from "@nestjs/cqrs";
import { AddAuthorPoemDto } from "../dtos/add-author-poem-dto";

export class AddAuthorPoemCommand implements ICommand {
    constructor(public readonly addAuthorPoemDto: AddAuthorPoemDto) {}
}