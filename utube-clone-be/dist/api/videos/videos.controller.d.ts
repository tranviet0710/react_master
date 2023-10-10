import { VideosService } from './videos.service';
import { PaginationQueryDto } from '@src/cores/dtos/pagination';
import { CreateVideoDto } from '@src/cores/dtos/videos';
export declare class VideosController {
    private readonly videosService;
    constructor(videosService: VideosService);
    add(req: any, dto: CreateVideoDto): Promise<import("../../cores/interfaces").IResponse<import("../../cores/entities").Video>>;
    paginate(dto: PaginationQueryDto): Promise<import("../../cores/interfaces").IResponseList<import("../../cores/entities").Video>>;
}
