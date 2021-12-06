// tslint:disable: variable-name
import { Injectable, Inject, Logger } from '@nestjs/common';
import { NEST_MYSQL2_OPTIONS} from './constants';
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

@Injectable()
/**
 *  You can remove the dependencies on the Logger if you don't need it.  You can also
 *  remove the `async test()` method.
 *
 *  The only thing you need to leave intact is the `@Inject(NEST_MYSQL2_OPTIONS) private _nest-mysql2Options`.
 *
 *  That injected dependency gives you access to the options passed in to
 *  NestMysql2Service.
 *
 */
export class NestMysql2Service implements INestMysql2Service {
  private readonly logger: Logger;
  constructor(
    @Inject(NEST_MYSQL2_OPTIONS) private _NestMysql2Options: NestMysql2Options,
  ) {
    this.logger = new Logger('NestMysql2Service');
    this.logger.log(`Options: ${JSON.stringify(this._NestMysql2Options)}`);
  }

  async test(): Promise<any> {
    return 'Hello from NestMysql2Module!';
  }
}