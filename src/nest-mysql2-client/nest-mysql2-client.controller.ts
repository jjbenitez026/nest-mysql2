/**
 *  NestMysql2ClientController is a testing controller that verifies that
 *  NestMysql2Module was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestMysql2Module`.
 *
 *  Once you begin customizing NestMysql2Module, you'll probably want
 *  to delete this controller.
 */
import { Controller, Get, Inject } from '@nestjs/common';

import { MYSQL2_CONNECTION } from '../constants';

@Controller()
export class NestMysql2ClientController {
  constructor(@Inject(MYSQL2_CONNECTION) private readonly mysql) {}

  @Get()
  async index() {
    const r = await this.mysql.query('SELECT * FROM users');

    console.log(r);
    
    return 'yeap';
  }
}
