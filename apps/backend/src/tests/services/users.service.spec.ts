import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '../../app/core/dto/user.dto';
import { UsersService } from '../../app/services/users.service';

const newUser: CreateUserDto = {
  name: 'Ronald de Jesus',
  lastname: 'Veliz Velasco',
  username: 'xronald',
  email: 'ron@gmail.com',
  phone: '654119299',
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get users should return 10 elements', () => {
    expect(service.getUsers().length).toBe(10);
  });

  it('get users should return 10 elements', () => {
    expect(service.getUsers().length).toBe(10);
  });

  it('get users should return 10 elements when we specify the page', () => {
    expect(service.getUsers(2).length).toBe(10);
  });

  it('get users should return empty array the page when we dont have more elements to show', () => {
    expect(service.getUsers(100000000)).toStrictEqual([]);
  });

  it('create user should return a new user', async () => {
    const { _id, ...res } = await service.createUser(newUser);
    expect(res).toStrictEqual(newUser);
  });

  it('create user should return BadRequestException error when email already exists', async () => {
    await service.createUser(newUser);
    const result = service.createUser(newUser);
    await expect(result).rejects.toBeInstanceOf(BadRequestException);
  });

  it('update user should return a the user updated', async () => {
    const { _id, ...res } = await service.createUser(newUser);
    const result = await service.updateUser(res, _id);
    expect({ _id, ...res }).toStrictEqual(result);
  });

  it('update user should return NotFoundException  error when user is not found', async () => {
    const { _id, ...res } = await service.createUser(newUser);
    const result = service.updateUser(res, 'fake-id');
    await expect(result).rejects.toBeInstanceOf(NotFoundException);
  });
});
