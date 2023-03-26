import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../app/controllers/users.controller';
import { UsersService } from '../../app/services/users.service';
import * as data from '../../../../../DB.json';
import { CreateUserDto, UpdateUserDto } from '../../app/core/dto/user.dto';
import { Response } from 'express';
const array = data as [];
const newUser = {
  name: 'Ronald de Jesus',
  surname: 'Veliz Velasco',
  username: 'xronald',
  email: 'ron@gmail.com',
  phone: '654119299',
};
const userServiceMock = {
  getUsers: jest.fn((): any[] => array.slice(0, 10)),
  createUser: jest.fn((createUserDto: CreateUserDto): any => newUser),
  updateUser: jest.fn((updateUserDto: UpdateUserDto): any => newUser),
};
describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: userServiceMock,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('get users should return 10 elements per page', async () => {
    expect((await controller.getUsers()).length).toBe(10);
  });

  it('create user should return a new user', async () => {
    expect((await controller.createUser(newUser))).toBe(newUser);
  });

  it('update user should return a the user update', async () => {
    expect((await controller.updateUser(newUser, 'fake-id'))).toBe(newUser);
  });
});
