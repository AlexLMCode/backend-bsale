"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(statusCode, customMessage = undefined, data = undefined, error = undefined) {
        this.statusCode = statusCode;
        this.message = customMessage;
        this.data = data;
        this.error = error;
    }
}
exports.default = Response;
