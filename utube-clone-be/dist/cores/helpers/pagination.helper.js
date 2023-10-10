"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
async function paginate(queryBuilder, options) {
    options.metaTransformer = (meta) => new Object({
        totalItems: meta.totalItems,
        limit: meta.itemsPerPage,
        totalPages: meta.totalPages,
        page: meta.currentPage,
        pagingCounter: (meta.currentPage - 1) * meta.itemsPerPage + 1,
        hasPrevPage: meta.currentPage - 1 ? true : false,
        hasNextPage: meta.totalPages > meta.currentPage ? true : false,
        previousPage: meta.currentPage - 1 ? meta.currentPage - 1 : null,
        nextPage: meta.totalPages > meta.currentPage ? meta.currentPage + 1 : null,
    });
    const result = await (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    return {
        success: true,
        data: Object.assign({ body: result.items }, result.meta),
    };
}
exports.paginate = paginate;
//# sourceMappingURL=pagination.helper.js.map