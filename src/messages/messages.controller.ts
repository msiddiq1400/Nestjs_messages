import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id2: any) {
    const message = await this.messageService.findOne(id2);
    if (message) {
      return message;
    }
    throw new NotFoundException('Message Not Found here');
  }
}
