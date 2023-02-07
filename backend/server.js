// IMPORTS
// packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { DB_URI, PORT, HOST } = process.env;

// MAIN
// App Instance and Settings
const app = express();

// General Middleware
// parse posty request body
app.use(express.json());

// Routes
// root

// connect to db then listen for request
mongoose.set("strictQuery", false);
mongoose.connect(DB_URI).then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Connectedto DB\nListening on\nPORT: ${PORT}\nHOST: ${HOST}`);
    });
});
