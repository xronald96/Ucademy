import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import * as data from '../../../../../DB.json';
import { CreateUserDto, UpdateUserDto } from '../core/dto/user.dto';
import * as moment from 'moment';
@Injectable()
export class UsersService {
  private users: any[];
  private take: number;
  constructor() {
    this.users = data as any[];
    this.take = 10;
  }
  getUsers(page?: number) {
    const split = this.take * (page || 0);
    return this.users.slice(split, split + this.take);
  }

  async updateUser(updateUserDto: UpdateUserDto, userId: string) {
    const findUserIndex = this.users.findIndex((user) => user?._id === userId);
    if (findUserIndex === -1) throw new NotFoundException('User not found');
    this.users[findUserIndex] = {
      ...this.users[findUserIndex],
      ...updateUserDto,
    };
    return this.users[findUserIndex];
  }

  async createUser(createUserDto: CreateUserDto) {
    if (this.users.some((user) => createUserDto.username === user.username))
      throw new BadRequestException();
    const newUser = {
      _id: randomUUID(),
      inscriptionDate: moment(new Date()).format('DD/MM/YY'),
      ...createUserDto,
    };
    this.users.unshift(newUser);
    return newUser;
  }
}
