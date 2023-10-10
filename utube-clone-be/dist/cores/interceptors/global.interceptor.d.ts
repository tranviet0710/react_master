import { Observable } from 'rxjs';
import { CallHandler, NestInterceptor } from '@nestjs/common';
import { IResponse } from '@src/cores/interfaces';
export declare class GlobalInterceptor implements NestInterceptor {
    intercept(context: any, next: CallHandler): Observable<IResponse<any>>;
}
