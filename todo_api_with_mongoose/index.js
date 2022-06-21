const express = require("express");
require("./config");
const todoList = require("./todo_list");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/list", async (req, resp) => {
  try {
    let data = await todoList.create(req.body);
    console.log(req.body);
    resp.send(data);
  } catch (e) {
    console.log(e.message);
    resp.send(e.message);
  }
});

app.get("/list", async (_, resp) => {
  let data = await todoList.find();
  console.log(data);
  resp.send(data);
});

app.delete("/list/:id", async (req, resp) => {
  const id = req.params.id;
  let data = await todoList.deleteOne({ id });
  console.log(data);
  resp.send(data);
});

app.delete("/list", async (_, resp) => {
  const data = await todoList.deleteMany();
  console.log(data);
  resp.send(data);
});

app.listen(4000, () => {
  console.log("connection established");
});
