"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const users_module_1 = require("./api/users/users.module");
const videos_module_1 = require("./api/videos/videos.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const helpers_1 = require("./cores/helpers");
const middlewares_1 = require("./cores/middlewares");
const auth_1 = require("./libs/auth");
const migrations_module_1 = require("./libs/migrations/migrations.module");
const typeorm_1 = require("./libs/typeorm");
const rating_module_1 = require("./api/rating/rating.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middlewares_1.AuthMiddleWare).exclude({ path: '(.*)/n-a/(.*)', method: common_1.RequestMethod.ALL }).forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
        consumer.apply(middlewares_1.LoggingMiddleWare).forRoutes({
            path: '*/n-a/*',
            method: common_1.RequestMethod.ALL,
        });
    }
    onApplicationBootstrap() {
        (0, helpers_1.startUpPrinting)('TRAINING TEST APP', +process.env.PORT || 5001);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot({
                ttl: 6000,
                limit: 1000,
            }),
            typeorm_1.TypeOrmLibraryModule,
            auth_1.AuthLibraryModule,
            users_module_1.UsersModule,
            videos_module_1.VideosModule,
            rating_module_1.RatingModule,
            migrations_module_1.MigrationLibraryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map