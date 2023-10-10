import { GetRatingVideoDto, RateVideoDto } from '@src/cores/dtos/videos';
import { RatingService } from './rating.service';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    rate(req: any, dto: RateVideoDto): Promise<import("../../cores/interfaces").IResponse<import("../../cores/entities").Rating>>;
    get(req: any, dto: GetRatingVideoDto): Promise<import("../../cores/interfaces").IResponse<import("../../cores/entities").Rating>>;
}
