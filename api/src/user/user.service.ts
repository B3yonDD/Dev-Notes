import { Injectable } from '@nestjs/common';
import { RegisteUserDTO } from './user.dtos';

@Injectable()
export class UserService {

    registerUser(register: RegisteUserDTO){
        return register;
    }

}
