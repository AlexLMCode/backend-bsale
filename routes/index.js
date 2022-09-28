"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("./products"));
const categories_1 = __importDefault(require("./categories"));
const router = (0, express_1.Router)();
router.use('/products', products_1.default);
router.use('/categories', categories_1.default);
exports.default = router;
