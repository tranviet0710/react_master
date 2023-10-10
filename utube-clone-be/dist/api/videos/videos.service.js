"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosService = void 0;
const googleapis_1 = require("googleapis");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const entities_1 = require("../../cores/entities");
const helpers_1 = require("../../cores/helpers");
let VideosService = class VideosService {
    constructor(videoRepository, userRepository) {
        this.videoRepository = videoRepository;
        this.userRepository = userRepository;
    }
    async add(dto, userId) {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            return {
                success: false,
                message: 'User is not found',
            };
        }
        const videoId = dto.url.split('=')[1];
        const youtube = googleapis_1.google.youtube({
            version: 'v3',
            auth: process.env.YOUTUBE_API_KEY,
        });
        const response = await youtube.videos.list({ part: ['snippet', 'statistics'], id: [videoId] });
        const video = new entities_1.Video();
        console.log('res: ', response.data.items[0].snippet);
        video.vid = videoId;
        video.title = response.data.items[0].snippet.title;
        video.description = response.data.items[0].snippet.description;
        video.likeCount = response.data.items[0].statistics.likeCount;
        video.dislikeCount = response.data.items[0].statistics.dislikeCount;
        video.thumbnail = response.data.items[0].snippet.thumbnails.standard.url;
        video.createdAt = video.generateDateNow();
        video.sharedBy = user;
        const data = await this.videoRepository.save(video);
        return {
            success: true,
            message: 'Created video successfully',
            data,
        };
    }
    async getList(dto) {
        const queryBuilder = this.videoRepository.createQueryBuilder('video').leftJoinAndSelect('video.sharedBy', 'sharedBy');
        if (dto.sortBy == 'publishedAt') {
            queryBuilder.orderBy('video.createdAt', 'DESC');
        }
        else {
            queryBuilder.orderBy('video.title', 'ASC');
        }
        const res = await (0, helpers_1.paginate)(queryBuilder, { limit: dto.limit, page: dto.currentPage });
        if (!res.success) {
            return {
                success: false,
                message: 'Something went wrong',
            };
        }
        return {
            success: true,
            data: res.data,
        };
    }
};
VideosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.Video)),
    __param(1, (0, typeorm_2.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], VideosService);
exports.VideosService = VideosService;
//# sourceMappingURL=videos.service.js.map