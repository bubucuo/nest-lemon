import { Controller, Get } from '@nestjs/common';
import { User2Service } from './user2.service';

@Controller('user2')
export class User2Controller {
  constructor(private readonly userService: User2Service) {}

  @Get('/test2')
  test(): string {
    return 'This action returns test users';
  }

  @Get('/list')
  async findAll() {
    return this.userService.findAll();
  }
}
