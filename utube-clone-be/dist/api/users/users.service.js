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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../cores/entities");
const auth_1 = require("../../libs/auth");
const password_hash_1 = require("password-hash");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(userRepository, authLibraryService) {
        this.userRepository = userRepository;
        this.authLibraryService = authLibraryService;
    }
    async login({ email, password }) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            return {
                success: false,
                message: 'User is not found',
            };
        }
        if ((0, password_hash_1.verify)(password, user.password)) {
            const token = await this.authLibraryService.generateToken(user);
            return {
                success: true,
                data: {
                    accessToken: token,
                    userId: user.id,
                    email: user.email,
                },
            };
        }
        else {
            throw new common_1.HttpException('Your password is wrong', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async register(dto) {
        const res = await this.userRepository.findOne({
            where: {
                email: dto.email,
            },
        });
        if (res) {
            return {
                success: false,
                message: 'User is exist',
            };
        }
        const user = new entities_1.User();
        user.email = dto.email;
        user.password = user.generatePasswordHash(dto.password);
        user.firstName = dto.firstName;
        user.lastName = dto.lastName;
        user.createdAt = user.generateDateNow();
        user.updatedAt = user.generateDateNow();
        const data = await this.userRepository.save(user);
        return {
            success: true,
            data,
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_1.AuthLibraryService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map