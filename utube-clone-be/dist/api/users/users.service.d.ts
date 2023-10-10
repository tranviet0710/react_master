import { AuthenticatedDto, CreateUserDto } from '@src/cores/dtos/users';
import { User } from '@src/cores/entities';
import { IAuth, IResponse } from '@src/cores/interfaces';
import { AuthLibraryService } from '@src/libs/auth';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    private readonly authLibraryService;
    constructor(userRepository: Repository<User>, authLibraryService: AuthLibraryService);
    login({ email, password }: AuthenticatedDto): Promise<IResponse<IAuth>>;
    register(dto: CreateUserDto): Promise<IResponse<User>>;
}
