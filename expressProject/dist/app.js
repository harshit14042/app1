"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Hello!!!");
const express_1 = __importDefault(require("express"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/todos', todoRoutes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
    next();
});
app.listen(3000);
