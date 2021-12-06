import { MYSQL2_CONNECTION } from './constants';
import { NestMysql2Service } from './nest-mysql2.service';

export const connectionFactory = {
  provide: MYSQL2_CONNECTION,
  useFactory: async nestMysql2Service => {
    return nestMysql2Service.getMysql();
  },
  inject: [NestMysql2Service],
}
