"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../common/response"));
const products_1 = __importDefault(require("../services/products"));
const getProducts = (request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield products_1.default.getProductFromRepository();
        return res.json(new response_1.default(200, 'Success', data, undefined));
    }
    catch (error) {
        return res
            .status(500)
            .json(new response_1.default(500, error.message, undefined, error));
    }
});
exports.default = {
    getProducts,
};
