import { NestMysql2Options } from './nest-mysql2-options.interface';
export interface NestMysql2OptionsFactory {
    createNestMysql2Options(): Promise<NestMysql2Options> | NestMysql2Options;
}
