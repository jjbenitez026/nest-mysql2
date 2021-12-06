import { NestMysql2Options } from './interfaces';

import { NEST_MYSQL2_OPTIONS } from './constants';

export function createNestMysql2Providers(
  options: NestMysql2Options,
) {
  return [
    {
      provide: NEST_MYSQL2_OPTIONS,
      useValue: options,
    },
  ];
}
