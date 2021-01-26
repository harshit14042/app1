"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const Todo_1 = require("../models/Todo");
const Todos = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new Todo_1.Todo(Math.random().toString(), text);
    Todos.push(newTodo);
    res.status(201).json({ log: "The Todo was created", message: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.json({ todos: Todos });
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    const id = req.params.id;
    const newText = req.body.text;
    const todoIndex = Todos.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("No such todo with the given Id!!");
    }
    const todo = Todos[todoIndex];
    todo.text = newText;
    Todos[todoIndex] = todo;
    res.json({ "log": "Updated Successfully", "updatedTodo": Todos[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = Todos.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("No such todo with the given Id!!");
    }
    Todos.splice(todoIndex, 1);
    res.json({ "log": "Deleted Successfully" });
};
exports.deleteTodo = deleteTodo;
