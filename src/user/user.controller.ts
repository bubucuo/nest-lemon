import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

// 用户信息的控制器
// crud操作: create read update delete 增删改查
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/test2')
  test(): string {
    return 'This action returns test users';
  }

  @Post('add')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get('/list')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
