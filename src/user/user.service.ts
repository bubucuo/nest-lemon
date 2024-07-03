import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      // id: createUserDto.id,
      username: createUserDto.username,
      age: createUserDto.age,
      code: createUserDto.code,
      address: createUserDto.address,
      phone: createUserDto.phone,
      password: createUserDto.password,
    });
  }

  // 分页
  async findAll({
    pageSize,
    pageNo,
  }: PaginationDto): Promise<{ content: User[]; count: number }> {
    const { rows, count } = await this.userModel.findAndCountAll({
      order: [['id', 'ASC']],
      limit: pageSize - 0,
      offset: (pageNo - 1) * pageSize,
    });

    return {
      content: rows,
      count,
    };
  }

  findOne(id: number): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  findOneByName(name: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        username: name,
      },
    });
  }

  async remove(id: number): Promise<{ id: number }> {
    const user = await this.findOne(id);
    await user.destroy();
    // 返回data.id
    return { id: user.id };
  }

  async update(updateUserDto: CreateUserDto) {
    const user = await this.findOne(updateUserDto.id);
    await user.update({
      // id: updateUserDto.id,
      username: updateUserDto.username,
      age: updateUserDto.age,
      code: updateUserDto.code,
      address: updateUserDto.address,
      phone: updateUserDto.phone,
      password: updateUserDto.password,
    });

    // 返回user对象的json
    return user.toJSON();
  }

  // async login(loginUserDto: CreateUserDto): Promise<User> {
  //   return this.userModel.findOne({
  //     where: {
  //       username: loginUserDto.username,
  //       password: loginUserDto.password,
  //     },
  //   });
  // }
}
