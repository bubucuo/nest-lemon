import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from './dto/pagination.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

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
  async findAll(@Query() query: PaginationDto) {
    const { content, count } = await this.userService.findAll(query);
    return { content, total: count };
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);

    // return res.status(HttpStatus.OK).json(this.userService.findOne(id));
  }

  @Get('/findOneByName/:name')
  findOneByName(@Param('name') name: string): Promise<User> {
    return this.userService.findOneByName(name);
  }

  @Post('/delete/:id')
  async remove(@Param('id') id: number): Promise<{ id: number }> {
    // return this.userService.remove(id);
    try {
      const res = await this.userService.remove(id);
      return res;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: '删除失败',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  @Post('/update')
  update(@Body() updateUserDto: CreateUserDto): Promise<void> {
    return this.userService.update(updateUserDto);
  }

  // @Post('/login')
  // login(@Body() loginUserDto: CreateUserDto): Promise<User> {
  //   return this.userService.login(loginUserDto);
  // }
}
