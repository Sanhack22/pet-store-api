import { RegisterUserDto } from '../dtos/auth/register-user.dto';//3
import { UserEntity } from '../entities/auth/user.entity';


export abstract class AuthDataSource { // 1
    abstract register(registerUserDto:RegisterUserDto): Promise<UserEntity> //4

} 