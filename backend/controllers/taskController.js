const db = require("../models/dataBase");

exports.getTasks = (req, res) => {
  db.query("select * from tasks", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      res.json(results);
    }
  });
};

exports.getTaskId = (req, res) => {
  const { id } = req.params;
  db.query("select * from tasks where id= ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json("Task not found");
    }
    res.json(results[0]);
  });
};

exports.createTask = (req, res) => {
  const { title, description, priority, completed, createdDate } = req.body;

  if (!title || !description || !priority || !createdDate) {
    return res.status(400).json("All fields are required.");
  }
  const completedValue = completed === true;
  const sql =
    "insert into tasks (title, description, priority, completed, createdDate) values (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [title, description, priority, completed, createdDate, completedValue],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: result.insertId, ...req.body });
    }
  );
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, priority, completed, createdDate } = req.body;

  if (!title || !description || !priority || !createdDate) {
    return res.status(400).json("Not updated.");
  }

  const completedValue = completed === true;

  const sql =
    "update tasks set title=?, description=?, priority=?, completed=?, createdDate=? where id=?";

  const values = [
    title,
    description,
    priority,
    completedValue,
    createdDate,
    id,
  ];

  db.query(sql, values, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json("Task updated successfully");
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  db.query("delete from tasks where id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json("Task deleted successfully");
  });
};
