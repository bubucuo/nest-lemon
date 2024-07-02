import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User2 } from './user2.schema';

@Injectable()
export class User2Service {
  constructor(@InjectModel(User2.name) private user2Model: Model<User2>) {}

  async findAll(): Promise<User2[]> {
    const res = await this.user2Model.find().exec();
    return res;
  }
}
