import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { User } from './user/models/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '111111',
      database: 'dev2',
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
