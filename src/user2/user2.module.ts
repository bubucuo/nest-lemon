import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User2, User2Schema } from './user2.schema';
import { User2Service } from './user2.service';
import { User2Controller } from './user2.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User2.name, schema: User2Schema }]),
  ],
  controllers: [User2Controller],
  providers: [User2Service],
})
export class User2Module {}
