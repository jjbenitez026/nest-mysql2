"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestMysql2ClientModule = void 0;
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
const common_1 = require("@nestjs/common");
const nest_mysql2_client_controller_1 = require("./nest-mysql2-client.controller");
const nest_mysql2_module_1 = require("../nest-mysql2.module");
let NestMysql2ClientModule = class NestMysql2ClientModule {
};
NestMysql2ClientModule = __decorate([
    common_1.Module({
        controllers: [nest_mysql2_client_controller_1.NestMysql2ClientController],
        imports: [nest_mysql2_module_1.NestMysql2Module.register({})],
    })
], NestMysql2ClientModule);
exports.NestMysql2ClientModule = NestMysql2ClientModule;
