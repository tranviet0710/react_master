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
exports.RatingService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const entities_1 = require("../../cores/entities");
let RatingService = class RatingService {
    constructor(ratingRepository, videoRepository, userRepository) {
        this.ratingRepository = ratingRepository;
        this.videoRepository = videoRepository;
        this.userRepository = userRepository;
    }
    async rate(dto, userId) {
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            },
        });
        if (!user) {
            return {
                success: false,
                message: 'User is not found',
            };
        }
        const video = await this.videoRepository.findOne({
            where: {
                id: dto.videoId,
            },
        });
        if (!video) {
            return {
                success: false,
                message: 'Video is not found',
            };
        }
        const rating = await this.ratingRepository.findOne({
            where: {
                user: {
                    id: user.id,
                },
                video: {
                    id: video.id,
                },
            },
        });
        if (rating) {
            rating.star = dto.star;
            rating.updatedAt = rating.generateDateNow();
            const data = await this.ratingRepository.save(rating);
            return {
                success: true,
                data,
            };
        }
        const newRating = new entities_1.Rating();
        newRating.video = video;
        newRating.user = user;
        newRating.star = dto.star;
        newRating.createdAt = newRating.generateDateNow();
        const data = await this.ratingRepository.save(newRating);
        return {
            success: true,
            data,
        };
    }
    async get(dto, userId) {
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            },
        });
        if (!user) {
            return {
                success: false,
                message: 'User is not found',
            };
        }
        const video = await this.videoRepository.findOne({
            where: {
                id: dto.videoId,
            },
        });
        if (!video) {
            return {
                success: false,
                message: 'Video is not found',
            };
        }
        const data = await this.ratingRepository.findOne({
            where: {
                user: {
                    id: user.id,
                },
                video: {
                    id: video.id,
                },
            },
        });
        return {
            success: true,
            data,
        };
    }
};
RatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.Rating)),
    __param(1, (0, typeorm_2.InjectRepository)(entities_1.Video)),
    __param(2, (0, typeorm_2.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], RatingService);
exports.RatingService = RatingService;
//# sourceMappingURL=rating.service.js.map