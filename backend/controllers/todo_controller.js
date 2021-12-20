'use strict';

const Todo = require('../models/todo');

exports.getTodoItems = function(req, res) {
    Todo.findAll(function(err, todo) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', todo);
        res.send(todo);
    });
}; 

exports.getTodoItemById = function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (err)
            res.send(err);
        res.json(todo);
    });
};

exports.createTodoItem = function(req, res) {
    const new_todo = new Todo(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Todo.create(new_todo, function(err, todo) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Todo added successfully!", data: todo });
        });
    }
};


exports.updateTodoItem = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Todo.update(req.params.id, new Todo(req.body), function(err) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Todo updated successfully' });
        });
    }

};


exports.deleteTodoItem = function(req, res) {
    Todo.delete(req.params.id, function(err) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Todo successfully deleted' });
    });
};

exports.getOrderedItems = function(req, res) {
    Todo.findOrdered(req.params.ord, function(err, todo) {
        if (err)
            res.send(err);
        res.json(todo);
    });
};


exports.getFirstTenItems = function(req, res) {
    Todo.findN(req.params.n, function(err, todo) {
        if (err)
            res.send(err);
        res.json(todo);
    });
};

exports.getNextItems = function(req, res) {
    Todo.findSetN(req.params.id, function(err, todo) {
        if (err)
            res.send(err);
        res.json(todo);
    });
};