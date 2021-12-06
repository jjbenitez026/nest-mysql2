import { NestMysql2Options } from './interfaces';
/**
 * Sample interface for NestMysql2Service
 *
 * Customize this as needed to describe the NestMysql2Service
 *
 */
interface INestMysql2Service {
    test(): Promise<any>;
}
export declare class NestMysql2Service implements INestMysql2Service {
    private _NestMysql2Options;
    private readonly logger;
    constructor(_NestMysql2Options: NestMysql2Options);
    test(): Promise<any>;
}
export {};
