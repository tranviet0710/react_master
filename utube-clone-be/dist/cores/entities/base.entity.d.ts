import { BaseEntity as TypeOrmBaseEntity } from 'typeorm';
export declare class BaseEntity extends TypeOrmBaseEntity {
    id: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt?: Date;
    generateUUID(): string;
    generateDateNow(): Date;
    generatePasswordHash(password: string): string;
    verifyPassword(password: string, hashedPassword: string): boolean;
    toJSON(): any;
    removePassword(): any;
}
