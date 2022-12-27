import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private messageRepo: MessagesRepository;
  constructor() {
    this.messageRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content) {
    return this.messageRepo.create(content);
  }
}
