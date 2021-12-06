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
import { Controller, Get } from '@nestjs/common';
import { NestMysql2Service } from '../nest-mysql2.service';

@Controller()
export class NestMysql2ClientController {
  constructor(private readonly nestMysql2Service: NestMysql2Service) {}

  @Get()
  index() {
    return this.nestMysql2Service.test();
  }
}
