const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});


const dataRoutes = require('./routes/todo_routes')

app.use('/api/v1/todos', dataRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

