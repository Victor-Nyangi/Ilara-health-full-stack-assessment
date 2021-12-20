const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller');

// Retrieve all todoitmes
router.get('/', todoController.getTodoItems);

// Retrieve a single todo item using an id
router.get('/:id', todoController.getTodoItemById);

// Create a new item
router.post('/', todoController.createTodoItem);

// Update an item using an id
router.put('/:id', todoController.updateTodoItem);

// Delete an item using an id
router.delete('/:id', todoController.deleteTodoItem);

// Return all todos sorted by id in ascending or descending order.
router.get('/?sort=asc|desc', todoController.getOrderedItems)

// Return the first 10 todos.
router.get('/?limit=10', todoController.getFirstTenItems)

// Skip the first ten and return the next 10 todos.
router.get('/?limit=10&skip=10', todoController.getNextItems)

module.exports = router


// app.get("/todos", db.getTodoItems);
// app.get("/todos/:id", db.getTodoById);
// app.post("/todos", db.createTodoItem);
// app.put("/todos/:id", db.updateTodoItem);
// app.delete("/todos/:id", db.deleteTodoItem);

// app.get("/todos?sort=asc|desc",db.getSortedTodoItems);
// app.get("/todos?limit=10",);
// app.get("/todos?limit=10&skip=10",);