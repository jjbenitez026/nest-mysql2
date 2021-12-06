/**
 *  If you're building a standalone npm package hosting a dynamic module, you
 *  should delete this file.  Its only purpose is to bootstrap the app so that
 *  you can run the quick verification test (see nest-mysql2-client/nest-mysql2-client.module.ts)
 */
import { NestFactory } from '@nestjs/core';
import { NestMysql2ClientModule } from './nest-mysql2-client/nest-mysql2-client.module';

async function bootstrap() {
  const app = await NestFactory.create(NestMysql2ClientModule);
  await app.listen(3000);
}
bootstrap();
