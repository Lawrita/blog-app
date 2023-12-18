const express = require("express");
require("dotenv").config();
const cors =require("cors")
const postRoutes = require("./routes/posts.routes")
const envConstants = require("./configs/constants");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors())

app.get("/api", async (req, res) => {
  return res.status(200).json({ message: "Welcome to my blog app api" });
});

app.use("/api/posts", require("./routes/posts.routes"));
app.use("*", (req, res) => {
  return res.status(404).json({ error: "Route not found", statusText: "fail" });
});

const PORT = process.env.PORT || 7000;

mongoose
  .connect(envConstants.MONGO_URI)
  .then((data) => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`listening on port  ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
