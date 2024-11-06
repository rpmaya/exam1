const express = require("express");
const cors = require("cors");
require('dotenv').config();
const dbConnect = require('./config/mongo');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/exam"));

dbConnect();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

module.exports = app;