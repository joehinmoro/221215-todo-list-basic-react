// IMPORTS
const router = require("express").Router;

// ROUTES
// index
router.get("/", getTodos);
// show
router.get("/:id", getTodo);
// create
router.post("/", createTodo);
// update
router.patch("/:id", updateTodo);
// delete
router.delete("/:id", deleteTodo);

// EXPORTS
module.exports = router;
