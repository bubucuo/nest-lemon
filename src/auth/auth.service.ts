import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByName(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    // todo
    // 查到了user，证明username是有效的，接下比较password
    // 1. 如果password不匹配，提示用户'密码错误'
    // 2. 如果password匹配，生成token并返回
    // 没有查到user，提示用户'用户不存在'
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
