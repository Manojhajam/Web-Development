// https://www.npmjs.com/package/mongodb

import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({
        "title": "hello World",
        desc: "Description of this todo",
        isDone: false,
        days: 20
    })
    todo.save()
    res.send("Hello world");
})


app.get('/a', async (req, res) => { 
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
    console.log(`Example app listining on port ${port}`);
})