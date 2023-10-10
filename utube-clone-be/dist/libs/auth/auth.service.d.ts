import { User } from '@src/cores/entities';
import { JwtService } from '@nestjs/jwt';
import { IAuthPayload } from '@src/cores/interfaces';
export declare class AuthLibraryService {
    private jwtService;
    authPayload: IAuthPayload;
    constructor(jwtService: JwtService);
    generateToken(user: User): Promise<string>;
    verifyToken(bearerToken: string): string;
    decodeToken(token: string): IAuthPayload;
    getAuthPayload(): IAuthPayload;
}
