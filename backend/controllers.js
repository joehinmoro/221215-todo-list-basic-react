// IMPORTS
const mongoose = require("mongoose");
const { Todo } = require("./models");

// CTRL FUNC

// index - GET - "/"
const getTodos = async (req, res) => {
    try {
        // query all todos from db
        const todos = await Todo.find();
        res.status(200).json(todos);
        // .sort()
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "Server Error" } });
    }
};

// show - GET - "/:id"
const getTodo = async (req, res) => {
    try {
        // destruct id
        const { id } = req.params;
        // validate id
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ error: { code: 404, message: "Not Found" } });
        // query for todo and validate
        const todo = await Todo.findById(id);
        if (!todo) return res.status(404).json({ error: { code: 404, message: "Not Found" } });
        // respond with todo
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "Server Error" } });
    }
};

// create - POST - "/"
const createTodo = async (req, res) => {
    try {
        // destruct data from req body
        const { title, priority } = req.body;
        try {
            // create new record
            const todo = await Todo.create({ title, priority, isCompleted: false });
            // respond with new todo
            res.status(200).json(todo);
        } catch (error) {
            return res.status(400).json({ error: { code: 400, message: error.message } });
        }
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "Server Error" } });
    }
};

//  update - PATCH - "/:id"
const updateTodo = async (req, res) => {
    try {
        // destruct id
        const { id } = req.params;
        // validate id
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ error: { code: 404, message: "Not Found" } });
        // query for todo and validate
        const todo = await Todo.findById(id);
        if (!todo) return res.status(404).json({ error: { code: 404, message: "Not Found" } });

        //   destruct update data from req body
        const { title, priority, isCompleted } = req.body;
        // set non-redundant update payload
        const payload = {};
        if (todo.title !== title) payload.title = title;
        if (todo.priority !== priority) payload.priority = priority;
        if (todo.isCompleted !== isCompleted) payload.isCompleted = isCompleted;

        // make update query
        try {
            const updatedTodo = await Todo.findByIdAndUpdate(id, payload, { new: true });
            res.status(200).json(updatedTodo);
        } catch (error) {
            return res.status(400).json({ error: { code: 400, message: error.message } });
        }
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "Server Error" } });
    }
};

// delete - DELETE - "/:id"
const deleteTodo = async (req, res) => {
    try {
        // destruct id
        const { id } = req.params;
        // validate id
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ error: { code: 404, message: "Not Found" } });
        // query for todo and validate
        const todo = await Todo.findById(id);
        if (!todo) return res.status(404).json({ error: { code: 404, message: "Not Found" } });
        try {
            const deletedTodo = await Todo.findByIdAndDelete(id);
            res.status(200).json(deletedTodo);
        } catch (error) {
            return res.status(400).json({ error: { code: 400, message: error.message } });
        }
    } catch (error) {
        res.status(500).json({ error: { code: 500, message: "Server Error" } });
    }
};

// EXPORT
module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo };
