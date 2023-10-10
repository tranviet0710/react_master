"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalInterceptor = void 0;
const chalk_1 = require("chalk");
const date_fns_1 = require("date-fns");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const common_1 = require("@nestjs/common");
let GlobalInterceptor = class GlobalInterceptor {
    intercept(context, next) {
        const request = context.getArgByIndex(0);
        const response = context.getArgByIndex(1);
        return next.handle().pipe((0, operators_1.map)(data => {
            if (data === null || data === void 0 ? void 0 : data.message) {
                data.message = data.message;
            }
            if (data === null || data === void 0 ? void 0 : data.useRender) {
                return response.render(data.template, Object.assign({}, data.data));
            }
            if (data === null || data === void 0 ? void 0 : data.useRedirect) {
                return response.redirect(data.redirectUrl);
            }
            return data;
        }), (0, operators_1.catchError)(error => {
            var _a, _b, _c, _d;
            const _error = JSON.parse(JSON.stringify(error));
            if (_error.status && typeof _error.response === 'string') {
                const status = _error.status;
                const message = _error.response;
                return (0, rxjs_1.of)({ status, message });
            }
            if (_error.status && _error.status === 400 && _error.name === 'BadRequestException') {
                const status = _error.status;
                const message = ((_b = (_a = _error.response) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.length) ? (_c = _error.response) === null || _c === void 0 ? void 0 : _c.message[0] : (_d = _error === null || _error === void 0 ? void 0 : _error.response) === null || _d === void 0 ? void 0 : _d.message;
                return (0, rxjs_1.of)({ status, message });
            }
            console.error((0, chalk_1.red)(`[${request.method}] ${request.originalUrl} at [${(0, date_fns_1.format)(new Date(), 'dd/MM/yyyy hh:mm')}]`, error === null || error === void 0 ? void 0 : error.message));
            return (0, rxjs_1.of)({ error: _error });
        }));
    }
};
GlobalInterceptor = __decorate([
    (0, common_1.Injectable)()
], GlobalInterceptor);
exports.GlobalInterceptor = GlobalInterceptor;
//# sourceMappingURL=global.interceptor.js.map