import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { NestMysql2Options } from './nest-mysql2-options.interface';
import { NestMysql2OptionsFactory } from './nest-mysql2-options-factory.interface';
export interface NestMysql2AsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useExisting?: Type<NestMysql2OptionsFactory>;
    useClass?: Type<NestMysql2OptionsFactory>;
    useFactory?: (...args: any[]) => Promise<NestMysql2Options> | NestMysql2Options;
}
