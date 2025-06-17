const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.Port || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server site http://localhost:${PORT}`);
});
