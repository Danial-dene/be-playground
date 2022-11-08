import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findOne(username: string): Promise<User> {
    const user = await this.userRepo.findOne({ username });
    return user;
  }

  async saveRt(rt: string, id: string) {
    const user = await this.userRepo.findOne({ id });
    user.rt = rt;
    console.log('ooga')
    await this.userRepo.save(user);
  }
}
