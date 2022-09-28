"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(statusCode = 200, customMessage = undefined, data = undefined, error = undefined) {
        this.statusCode = statusCode;
        this.message = customMessage;
        this.data = data;
        this.error = error;
    }
}
exports.default = Response;
