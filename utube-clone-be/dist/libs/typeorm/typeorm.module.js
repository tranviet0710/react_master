"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmLibraryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../cores/entities");
const config_1 = require("../config");
let TypeOrmLibraryModule = class TypeOrmLibraryModule {
};
TypeOrmLibraryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigLibraryModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                entities: [entities_1.User, entities_1.Video, entities_1.Rating],
                synchronize: true,
                autoLoadEntities: true,
            }),
        ],
    })
], TypeOrmLibraryModule);
exports.TypeOrmLibraryModule = TypeOrmLibraryModule;
//# sourceMappingURL=typeorm.module.js.map