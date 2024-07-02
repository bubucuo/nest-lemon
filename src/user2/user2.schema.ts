import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type User2Document = HydratedDocument<User2>;

@Schema({ collection: 'user' })
export class User2 {}

export const User2Schema = SchemaFactory.createForClass(User2);
