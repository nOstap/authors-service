import { CreateAuthorDto } from './../dtos/create-author.dto';
import { ICommand } from "@nestjs/cqrs";

export class CreateAuthorCommand implements ICommand {
    constructor(createAuthorDto: CreateAuthorDto) {

    }
}