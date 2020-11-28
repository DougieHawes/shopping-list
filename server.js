const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true, retryWrites: false },
  () => console.log("mongo connected...")
);

app.use("/api/items", items);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`express app running port:${port}`));
