"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNestMysql2Providers = void 0;
const constants_1 = require("./constants");
function createNestMysql2Providers(options) {
    return [
        {
            provide: constants_1.NEST_MYSQL2_OPTIONS,
            useValue: options,
        },
    ];
}
exports.createNestMysql2Providers = createNestMysql2Providers;
