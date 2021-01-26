import {RequestHandler} from 'express';
import {Todo} from '../models/Todo';

const Todos: Todo[]=[];

export const createTodo: RequestHandler=(req,res,next)=>{
    const text = (req.body as {text:string}).text;
    const newTodo: Todo=new Todo(Math.random().toString(),text);
    Todos.push(newTodo);
    res.status(201).json({log:"The Todo was created", message: newTodo});
}

export const getTodo:RequestHandler=(req,res,next)=>{
    res.json({todos:Todos});
}

export const updateTodo: RequestHandler<{id:string}>=(req,res,next)=>{
    const id:string=req.params.id;

    const newText = (req.body as {text:string}).text;

    const todoIndex:number = Todos.findIndex(todo=>todo.id===id);

    if(todoIndex<0){
        throw new Error("No such todo with the given Id!!");
    }

    const todo = Todos[todoIndex];

    todo.text = newText;

    Todos[todoIndex] = todo;

    res.json({"log":"Updated Successfully","updatedTodo":Todos[todoIndex]});
}

export const deleteTodo: RequestHandler<{id:string}>=(req,res,next)=>{
    const id:string=req.params.id;

    const todoIndex:number = Todos.findIndex(todo=>todo.id===id);

    if(todoIndex<0){
        throw new Error("No such todo with the given Id!!");
    }

    Todos.splice(todoIndex,1);

    res.json({"log":"Deleted Successfully"});
}