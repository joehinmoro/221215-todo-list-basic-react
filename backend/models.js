// IMPORTS
const { model, Schema } = require("mongoose");

// SCHEMA
const todosSchema = new Schema(
    {
        title: { type: String, required: true },
        priority: {
            type: String,
            enum: ["low", "normal", "high"],
            default: "normal",
        },
        isCompleted: {
            type: Boolean,
            enum: [false, true],
            default: false,
        },
    },
    { timestamps: true }
);

// MODEL
const Todo = model("Todo", todosSchema);

// EXPORTS
module.exports = { Todo };
