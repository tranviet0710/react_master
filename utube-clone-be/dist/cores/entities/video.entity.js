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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("./user.entity");
const rating_entity_1 = require("./rating.entity");
let Video = class Video extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Video.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Video.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Video.prototype, "vid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: 0 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Video.prototype, "likeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: 0 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Video.prototype, "dislikeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, default: 0 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Video.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Video.prototype, "sharedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, r => r.user, { onDelete: 'CASCADE' }),
    __metadata("design:type", rating_entity_1.Rating)
], Video.prototype, "favorited", void 0);
Video = __decorate([
    (0, typeorm_1.Entity)({ name: 'videos' })
], Video);
exports.Video = Video;
//# sourceMappingURL=video.entity.js.map