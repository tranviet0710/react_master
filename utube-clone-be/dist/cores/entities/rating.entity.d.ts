import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Video } from './video.entity';
export declare class Rating extends BaseEntity {
    user: User;
    video: Video;
    star: number;
}
