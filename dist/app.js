"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing like this didnt give us type support cause of its commonjs require concept
// const express = require("express");
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use("/todos", todos_1.default);
//error handling
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});
app.listen(3000);
