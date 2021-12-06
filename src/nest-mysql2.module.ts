import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { NestMysql2Service } from './nest-mysql2.service';
import {
  NEST_MYSQL2_OPTIONS,
} from './constants';
import {
  NestMysql2Options,
  NestMysql2AsyncOptions,
  NestMysql2OptionsFactory,
} from './interfaces';
import { createNestMysql2Providers } from './nest-mysql2.providers';
import { connectionFactory } from './nest-mysql2-connection.provider';

@Global()
@Module({
  providers: [NestMysql2Service, connectionFactory],
  exports: [NestMysql2Service, connectionFactory],
})
export class NestMysql2Module {
  /**
   * Registers a configured NestMysql2 Module for import into the current module
   */
  public static register(
    options: NestMysql2Options,
  ): DynamicModule {
    return {
      module: NestMysql2Module,
      providers: createNestMysql2Providers(options),
    };
  }

  /**
   * Registers a configured NestMysql2 Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: NestMysql2AsyncOptions,
  ): DynamicModule {
    return {
      module: NestMysql2Module,
      providers: [
        ...this.createProviders(options),
      ],
    };
  }

  private static createProviders(
    options: NestMysql2AsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(
    options: NestMysql2AsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: NEST_MYSQL2_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
  provide: NEST_MYSQL2_OPTIONS,
      useFactory: async (optionsFactory: NestMysql2OptionsFactory) =>
        await optionsFactory.createNestMysql2Options(),
      inject: [options.useExisting || options.useClass],
    };
  }

 }
