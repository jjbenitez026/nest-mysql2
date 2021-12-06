import { NestMysql2Service } from '../nest-mysql2.service';
export declare class NestMysql2ClientController {
    private readonly nestMysql2Service;
    constructor(nestMysql2Service: NestMysql2Service);
    index(): Promise<any>;
}
