import { Repository } from 'typeorm';
import { PaginationQueryDto } from '@src/cores/dtos/pagination';
import { CreateVideoDto } from '@src/cores/dtos/videos';
import { User, Video } from '@src/cores/entities';
import { IResponse, IResponseList } from '@src/cores/interfaces';
export declare class VideosService {
    private readonly videoRepository;
    private readonly userRepository;
    constructor(videoRepository: Repository<Video>, userRepository: Repository<User>);
    add(dto: CreateVideoDto, userId: string): Promise<IResponse<Video>>;
    getList(dto: PaginationQueryDto): Promise<IResponseList<Video>>;
}
