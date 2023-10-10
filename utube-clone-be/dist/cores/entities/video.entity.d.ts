import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Rating } from './rating.entity';
export declare class Video extends BaseEntity {
    title: string;
    description?: string;
    vid: string;
    likeCount: string;
    dislikeCount: string;
    thumbnail: string;
    sharedBy: User;
    favorited: Rating;
}
