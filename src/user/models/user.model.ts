import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: false })
export class User extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  username: string;

  @Column
  password: string;
}
