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
exports.AuthMiddleWare = void 0;
const helpers_1 = require("../helpers");
const auth_1 = require("../../libs/auth");
const common_1 = require("@nestjs/common");
let AuthMiddleWare = class AuthMiddleWare {
    constructor(authService) {
        this.authService = authService;
    }
    use(req, res, next) {
        try {
            (0, helpers_1.routePrinting)(req.method, req.originalUrl);
            const bearerToken = req.headers.authorization;
            const token = this.authService.verifyToken(bearerToken);
            const payload = this.authService.decodeToken(token);
            if (!payload) {
                throw new common_1.HttpException('User is not found', common_1.HttpStatus.UNAUTHORIZED);
            }
            req.payload = payload;
            next();
        }
        catch (e) {
            if (e.status === common_1.HttpStatus.FORBIDDEN) {
                throw new common_1.HttpException(e.message, e.status);
            }
            else {
                throw new common_1.HttpException('User is not found', common_1.HttpStatus.UNAUTHORIZED);
            }
        }
    }
};
AuthMiddleWare = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_1.AuthLibraryService])
], AuthMiddleWare);
exports.AuthMiddleWare = AuthMiddleWare;
//# sourceMappingURL=auth.middleware.js.map