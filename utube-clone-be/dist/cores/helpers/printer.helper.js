"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routePrinting = exports.startUpPrinting = void 0;
const chalk_1 = require("chalk");
const startUpPrinting = (appName, port) => {
    console.log('');
    console.log('');
    console.log((0, chalk_1.yellow)('                 ========================================================================'));
    console.log((0, chalk_1.yellow)(`                        ${(0, chalk_1.green)('Instance Name')}: ${appName}`));
    console.log((0, chalk_1.yellow)(`                        ${(0, chalk_1.green)('Instance Port')}: ${port}`));
    console.log((0, chalk_1.yellow)(`                        ${(0, chalk_1.green)('PostgreSQL Host')}: ${process.env.POSTGRES_HOST}`));
    console.log((0, chalk_1.yellow)(`                        ${(0, chalk_1.green)('PostgreSQL Port')}: ${process.env.POSTGRES_PORT}`));
    console.log((0, chalk_1.yellow)(`                        ${(0, chalk_1.green)('Redis Host')}: ${process.env.REDIS_PORT ? 'localhost' : 'none'}`));
    console.log((0, chalk_1.yellow)(`                        ${(0, chalk_1.green)('Redis Port')}: ${process.env.REDIS_PORT ? process.env.REDIS_PORT : 'none'}`));
    console.log((0, chalk_1.yellow)(`                        ${(0, chalk_1.green)('Default Language')}: ${process.env.DEFAULT_LANG}`));
    console.log((0, chalk_1.yellow)(`                        ${(0, chalk_1.green)('Default Timezone')}: ${process.env.DEFAULT_TZ}`));
    console.log((0, chalk_1.yellow)('                 ========================================================================='));
    console.log('');
    console.log('');
};
exports.startUpPrinting = startUpPrinting;
const routePrinting = (requestMethod, originalUrl) => {
    console.log(`[${(0, chalk_1.yellow)(requestMethod)}] ${(0, chalk_1.yellow)(originalUrl)}`);
};
exports.routePrinting = routePrinting;
//# sourceMappingURL=printer.helper.js.map