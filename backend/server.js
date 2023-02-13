// IMPORTS
// packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { DB_URI, PORT, HOST } = process.env;
// routes
const todosRoute = require("./routes");

// MAIN
// App Instance and Settings
const app = express();

// General Middleware
// parse posty request body
app.use(express.json());

// Routes
app.all("/", (req, res) => {
    res.redirect("/api/todos");
});
// "/todos" (todos)
app.use("/api/todos", todosRoute);
// 404 (not found)
app.use((req, res) => {
    res.status(404).json({ error: { code: 404, message: "not found" } });
});

// connect to db then listen for request
mongoose.set("strictQuery", false);
mongoose.connect(DB_URI).then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Connectedto DB\nListening on\nPORT: ${PORT}\nHOST: ${HOST}`);
    });
});
