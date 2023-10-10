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
exports.VideosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const videos_service_1 = require("./videos.service");
const pagination_1 = require("../../cores/dtos/pagination");
const videos_1 = require("../../cores/dtos/videos");
let VideosController = class VideosController {
    constructor(videosService) {
        this.videosService = videosService;
    }
    async add(req, dto) {
        var _a;
        const userId = (_a = req.payload) === null || _a === void 0 ? void 0 : _a.userId;
        return await this.videosService.add(dto, userId);
    }
    async paginate(dto) {
        return await this.videosService.getList(dto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, videos_1.CreateVideoDto]),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "add", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "paginate", null);
VideosController = __decorate([
    (0, swagger_1.ApiBearerAuth)('defaultBearerAuth'),
    (0, swagger_1.ApiTags)('videos'),
    (0, common_1.Controller)('videos'),
    __metadata("design:paramtypes", [videos_service_1.VideosService])
], VideosController);
exports.VideosController = VideosController;
//# sourceMappingURL=videos.controller.js.map