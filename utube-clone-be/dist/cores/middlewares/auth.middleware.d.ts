import { NextFunction, Response } from 'express';
import { AuthLibraryService } from '@src/libs/auth';
import { NestMiddleware } from '@nestjs/common';
export declare class AuthMiddleWare implements NestMiddleware {
    private readonly authService;
    constructor(authService: AuthLibraryService);
    use(req: any, res: Response, next: NextFunction): void;
}
