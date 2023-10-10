import { Repository } from 'typeorm';
import { GetRatingVideoDto, RateVideoDto } from '@src/cores/dtos/videos';
import { Rating, User, Video } from '@src/cores/entities';
import { IResponse } from '@src/cores/interfaces';
export declare class RatingService {
    private readonly ratingRepository;
    private readonly videoRepository;
    private readonly userRepository;
    constructor(ratingRepository: Repository<Rating>, videoRepository: Repository<Video>, userRepository: Repository<User>);
    rate(dto: RateVideoDto, userId: string): Promise<IResponse<Rating>>;
    get(dto: GetRatingVideoDto, userId: string): Promise<IResponse<Rating>>;
}
