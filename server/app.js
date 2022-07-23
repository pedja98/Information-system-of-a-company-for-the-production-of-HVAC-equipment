const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const api = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join("images")));
app.use("/api", api);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App is listening port " + port);
});
