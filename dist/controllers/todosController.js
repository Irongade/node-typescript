"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = require("../model/todoModel");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todoModel_1.TodoModel(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        message: "Created the todo",
        createTodo: newTodo
    });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({
        todos: TODOS
    });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("OOPS.....Could not find todo!");
    }
    TODOS[todoIndex].text = updatedText;
    res.json({
        message: "Todo updated",
        updatedTodo: TODOS[todoIndex]
    });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("OOPS.....Could not find todo!");
    }
    TODOS.splice(todoIndex, 1);
    res.json({
        message: "Todo deleted"
    });
};
exports.deleteTodo = deleteTodo;
