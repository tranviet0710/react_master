import { AuthenticatedDto, CreateUserDto } from '@src/cores/dtos/users';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(dto: AuthenticatedDto): Promise<import("../../cores/interfaces").IResponse<import("../../cores/interfaces").IAuth>>;
    register(dto: CreateUserDto): Promise<import("../../cores/interfaces").IResponse<import("../../cores/entities").User>>;
}
