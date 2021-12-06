/**
 *  NestMysql2ClientModule is a testing module that verifies that
 *  NestMysql2Module was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestMysql2Module`.
 *
 *  Once you begin customizing NestMysql2Module, you'll probably want
 *  to delete this module.
 */
import { Module } from '@nestjs/common';
import { NestMysql2ClientController } from './nest-mysql2-client.controller';
import { NestMysql2Module } from '../nest-mysql2.module';

@Module({
  controllers: [NestMysql2ClientController],
  imports: [NestMysql2Module.register({})],
})
export class NestMysql2ClientModule {}
