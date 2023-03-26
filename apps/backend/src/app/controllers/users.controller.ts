import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, GetUsersDto, UpdateUserDto } from '../core/dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  getUsers(@Query('page') getUsersDto?: GetUsersDto) {
    return this.userService.getUsers(getUsersDto?.page);
  }

  @Post()
  createUser(@Body('createUserDto') createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put('/:id')
  updateUser(
    @Body('updateUserDto') updateUserDto: UpdateUserDto,
    @Param('id') userId: string
  ) {
    return this.userService.updateUser(updateUserDto, userId);
  }
}
