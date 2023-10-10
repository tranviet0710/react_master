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
exports.AuthLibraryService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthLibraryService = class AuthLibraryService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async generateToken(user) {
        const payload = {
            userId: user.id,
            email: user.email,
        };
        return this.jwtService.sign(payload);
    }
    verifyToken(bearerToken) {
        if (!bearerToken) {
            throw new common_1.HttpException('Token is invalid', common_1.HttpStatus.FORBIDDEN);
        }
        const token = bearerToken.split(',')[0].split(' ')[1];
        const verified = this.jwtService.verify(token);
        if (!verified) {
            throw new common_1.HttpException('Token is invalid', common_1.HttpStatus.FORBIDDEN);
        }
        return token;
    }
    decodeToken(token) {
        const decoded = this.jwtService.decode(token);
        this.authPayload = decoded;
        return decoded;
    }
    getAuthPayload() {
        return this.authPayload;
    }
};
AuthLibraryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthLibraryService);
exports.AuthLibraryService = AuthLibraryService;
//# sourceMappingURL=auth.service.js.map