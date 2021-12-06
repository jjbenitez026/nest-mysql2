import { DynamicModule } from '@nestjs/common';
import { NestMysql2Options, NestMysql2AsyncOptions } from './interfaces';
export declare class NestMysql2Module {
    /**
     * Registers a configured NestMysql2 Module for import into the current module
     */
    static register(options: NestMysql2Options): DynamicModule;
    /**
     * Registers a configured NestMysql2 Module for import into the current module
     * using dynamic options (factory, etc)
     */
    static registerAsync(options: NestMysql2AsyncOptions): DynamicModule;
    private static createProviders;
    private static createOptionsProvider;
}
