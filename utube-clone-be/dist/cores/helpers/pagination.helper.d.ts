import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { SelectQueryBuilder } from 'typeorm';
import { IResponseList } from '@src/cores/interfaces';
export declare function paginate<T>(queryBuilder: SelectQueryBuilder<T>, options: IPaginationOptions): Promise<IResponseList<T>>;
