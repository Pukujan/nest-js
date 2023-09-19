import { Controller, Get, Post, Put, Delete, Param, Body, Query, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { RoleGuard } from 'src/role/role.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  // GET /users?type=fast
  @Get()
  @UseGuards(RoleGuard)
  getUsers(@Query('role') role: 'customer' | 'admin') {
    // const service = new UsersService();
    return this.usersService.getUsers(role);
  }

  @Get(':id')
  getOneUsers(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.usersService.getUser(+id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Post()
  createUser(@Body(new ValidationPipe) createUserDto: CreateUserDto) {

    return this.usersService.createUser(createUserDto)
  }


  @Put(':id')
  updateUsers(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

    return this.usersService.updateUser(+id, updateUserDto)
  }

  @Delete(':id')
  deleteOneUsers(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }


}


//Get /users/:id
//Post /users
//Put /users/:id
//Delete /users/:id