import { Repository } from 'typeorm';
import { User } from '@src/cores/entities';
export declare class MigrationLibraryService {
    private readonly userRepository;
    adminCredentials: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    };
    constructor(userRepository: Repository<User>);
    initAdmin(): Promise<User>;
}
