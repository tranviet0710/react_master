import { BaseEntity } from './base.entity';
export declare class Activity extends BaseEntity {
    userId: string;
    path: string;
    method: string;
    status: string;
    message: string;
}
