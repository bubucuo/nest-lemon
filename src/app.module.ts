import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
// import { MongooseModule } from '@nestjs/mongoose';

// 装饰器
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '111111',
      database: 'dev',
      autoLoadModels: true,
      synchronize: true,
    }),

    UserModule,
    AuthModule,
  ],

  // imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
