import { BaseEntity } from './base.entity';
import { Rating } from './rating.entity';
export declare class User extends BaseEntity {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    favorited: Rating;
}
