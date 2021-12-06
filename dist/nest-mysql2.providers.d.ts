import { NestMysql2Options } from './interfaces';
export declare function createNestMysql2Providers(options: NestMysql2Options): {
    provide: string;
    useValue: NestMysql2Options;
}[];
