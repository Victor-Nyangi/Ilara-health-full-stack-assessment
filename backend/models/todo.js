'user strict';
var dbConn = require('../config/db');

//Todo object create
var Todo = function(todo) {
    this.task = todo.task;
    this.status = todo.status;
}; 

Todo.create = function(newTodo, result) {
    dbConn.query("INSERT INTO todos set ?", newTodo, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Todo.findById = function(id, result) {
    dbConn.query("Select * from todos where id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Todo.findAll = function(result) {
    dbConn.query("Select * from todos", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('todo : ', res);
            result(null, res);
        }
    });
};
Todo.update = function(id, todo, result) {
    dbConn.query("UPDATE todos SET task=? WHERE id = ?", [todo.task, todo.status, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Todo.delete = function(id, result) {
    dbConn.query("DELETE FROM todos WHERE id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Todo.findOrdered = function(ord, result) {
    dbConn.query("Select * from todos order by id $ord", ord, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('todo : ', res);
            result(null, res);
        }
    });
};

Todo.findN = function(n, result) {
    dbConn.query("Select * from todos order by id asc limit $1", n, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('todo : ', res);
            result(null, res);
        }
    });
};

Todo.findSetN = function(result) {
    dbConn.query("Select * from todos limit 10 offset 10", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('todo : ', res);
            result(null, res);
        }
    });
};

module.exports = Todo;