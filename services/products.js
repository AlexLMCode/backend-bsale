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
const product_1 = __importDefault(require("../persistence/models/product"));
const typeorm_1 = require("typeorm");
const getProductFromRepository = (name, categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = name || categoryId
            ? {
                name: name ? (0, typeorm_1.Like)(`%${name}%`) : undefined,
                category: categoryId ? categoryId : undefined,
            }
            : {};
        const productRepository = global.dataSource.getRepository(product_1.default);
        const products = yield productRepository.findBy(query);
        return products;
    }
    catch (error) {
        console.error('Error In Repository', error);
        throw error;
    }
});
exports.default = {
    getProductFromRepository,
};
