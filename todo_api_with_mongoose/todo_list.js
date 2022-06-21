const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: String,
});

module.exports = mongoose.model("todo-lists", todoSchema);
