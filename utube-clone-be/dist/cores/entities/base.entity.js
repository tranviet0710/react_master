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
exports.BaseEntity = void 0;
const password_hash_1 = require("password-hash");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
class BaseEntity extends typeorm_1.BaseEntity {
    generateUUID() {
        return (0, uuid_1.v4)();
    }
    generateDateNow() {
        return new Date();
    }
    generatePasswordHash(password) {
        return (0, password_hash_1.generate)(password);
    }
    verifyPassword(password, hashedPassword) {
        return (0, password_hash_1.verify)(password, hashedPassword);
    }
    toJSON() {
        if (this['password'] !== undefined)
            this['password'] = undefined;
        return this;
    }
    removePassword() {
        if (this['password'])
            this['password'] = undefined;
        return this;
    }
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BaseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true }),
    __metadata("design:type", Boolean)
], BaseEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: false }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base.entity.js.map