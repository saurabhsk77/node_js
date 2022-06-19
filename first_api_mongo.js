const dbConnect = require("./dbConnection");
const mongodb = require("mongodb");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", async (_, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});

app.get("/:name", async (req, resp) => {
  const param = req.params.name;
  let data = await dbConnect();
  data = await data.find({ name: param }).toArray();
  console.log(data);
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.insertOne(req.body);
  console.log(data);
  resp.send(req.body);
});

app.put("/:name", async (req, resp) => {
  const nameOfProduct = req.params.name;
  let data = await dbConnect();
  const { price, category, name } = req.body;
  let dataToUpdate = await data.updateOne(
    { name: nameOfProduct },
    { $set: { price, category, name } }
  );
  console.log(dataToUpdate);
  let updatedData = await data.find({ name: name }).toArray();
  resp.send(updatedData);
});

app.delete("/:id", async (req, resp) => {
  const idOfProduct = req.params.id;
  let data = await dbConnect();
  let dataToDelete = await data.deleteOne({
    _id: mongodb.ObjectId(idOfProduct),
  });
  console.log(dataToDelete);
  resp.send("Deleted");
});

app.listen(4000);
