"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_tz_1 = require("set-tz");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const interceptors_1 = require("./cores/interceptors");
async function bootstrap() {
    try {
        (0, set_tz_1.default)(process.env.DEFAULT_TZ);
    }
    catch (error) {
        console.log('SET-TZ ERROR TYPE');
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const extractor = (request) => {
        var _a;
        return [(_a = request.headers['api-version']) !== null && _a !== void 0 ? _a : '']
            .flatMap((v) => v.split(','))
            .filter(v => !!v)
            .sort()
            .reverse();
    };
    app.enableCors({
        origin: '*',
        methods: 'GET, PUT, POST, DELETE, OPTIONS',
        preflightContinue: false,
        credentials: true,
    });
    app.enableVersioning({
        type: common_1.VersioningType.CUSTOM,
        extractor,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.setGlobalPrefix('api');
    const apiOptions = new swagger_1.DocumentBuilder()
        .setTitle('Training Test API System')
        .setDescription('APP API')
        .addBearerAuth(undefined, 'defaultBearerAuth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, apiOptions);
    swagger_1.SwaggerModule.setup('/docs', app, document, {
        swaggerOptions: {
            authAction: {
                defaultBearerAuth: {
                    name: 'defaultBearerAuth',
                    schema: {
                        description: 'Default',
                        type: 'http',
                        in: 'header',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                    value: process.env.SWAGGER_TOKEN,
                },
            },
        },
    });
    app.useGlobalInterceptors(new interceptors_1.GlobalInterceptor());
    const port = process.env.PORT || 5001;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map