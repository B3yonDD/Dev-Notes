import { Controller, Post, Body } from '@nestjs/common';
import { RegisteUserDTO } from './user.dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ){}

    @Post()
    async registerUser(@Body() register: RegisteUserDTO){
        return this.userService.registerUser(register);
    }
}
