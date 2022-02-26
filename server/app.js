"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

const { SERVER_PORT } = require("./constants/constants");
const indexRouter = require("./routes/index");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/", indexRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server running @ http://localhost:${SERVER_PORT}/`);
});
