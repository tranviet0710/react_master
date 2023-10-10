import { NextFunction, Response } from 'express';
import { NestMiddleware } from '@nestjs/common';
import { AuthLibraryService } from '@src/libs/auth';
export declare class LoggingMiddleWare implements NestMiddleware {
    private readonly authService;
    constructor(authService: AuthLibraryService);
    use(req: any, res: Response, next: NextFunction): void;
}
