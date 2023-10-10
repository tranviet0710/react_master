import { IAuthPayload } from '@src/cores/interfaces';
export declare class AddActivityDto {
    auth: IAuthPayload;
    path: string;
    method: string;
    status: string;
    message: string;
}
